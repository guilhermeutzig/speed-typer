import { Show } from "solid-js";
import styles from "./styles.module.css";
import { signOut } from "./utils";
import type { UserRecord } from "firebase-admin/auth";
import GoogleSignIn from "../GoogleSignIn";

type Props = {
  user?: UserRecord;
};

const Header = ({ user }: Props) => {
  return (
    <header class={styles.header}>
      <Show when={user}>
        <button type="button" onClick={signOut}>
          Sign out
        </button>
      </Show>

      <Show when={!user}>
        <GoogleSignIn />
      </Show>
    </header>
  );
};

export default Header;
