import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "@/lib/firebase/client";
import styles from "./styles.module.css";

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

const GoogleSignIn = () => (
  <button class={styles.button} onClick={googleSignIn}>
    {/* Sign in with Google */}
  </button>
);

export default GoogleSignIn;
