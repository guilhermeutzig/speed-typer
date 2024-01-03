import { auth } from "@/lib/firebase/server";
import type { APIRoute } from "astro";

const body = (body: object) => JSON.stringify(body);

export const GET: APIRoute = async ({ redirect, request, cookies }) => {
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];

  if (!idToken) {
    return new Response(body({ error: "No token found" }), {
      status: 401,
    });
  }

  let sessionCookie;
  try {
    await auth.verifyIdToken(idToken);

    sessionCookie = await auth
      .createSessionCookie(idToken, { expiresIn: 300000 })
      .catch(
        (error) =>
          new Response(body({ message: error.message }), { status: 401 })
      );
  } catch (error: unknown) {
    return new Response(body({ error }), {
      status: 401,
    });
  }

  cookies.set("session", sessionCookie, { path: "/" });

  return redirect("/", 302);
};
