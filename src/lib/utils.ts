import { app } from "@/lib/firebase/client";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { auth as serverAuth } from "./firebase/server";

export const getUser = async (cookie: string) => {
  try {
    const decodedIdToken = await serverAuth.verifySessionCookie(cookie, true);
    const user = await serverAuth.getUser(decodedIdToken.uid);

    return user;
  } catch (error) {
    return null;
  }
};

export const signOut = async () => {
  const res = await fetch("/api/auth/logout");

  if (!res.ok) {
    const data = await res.json();
    return data;
  }

  if (res.redirected) {
    window.location.assign(res.url);
  }
};
