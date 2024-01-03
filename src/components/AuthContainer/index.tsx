import { app, firebaseConfig } from "@/lib/firebase/client";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  const userCredential = await signInWithPopup(auth, provider);
  const idToken = await userCredential.user.getIdToken();

  const res = await fetch("/api/auth/login", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });

  if (!res.ok) {
    const data = await res.json();
    return data;
  }

  if (res.redirected) {
    window.location.assign(res.url);
  }
};

const AuthContainer = () => {
  return (
    <form>
      <h1>Google Login</h1>
      <button type="button" onClick={googleSignIn}>
        Google Sign In
      </button>
    </form>
  );
};

export default AuthContainer;
