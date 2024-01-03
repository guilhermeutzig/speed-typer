import styles from "./styles.module.css";

const signOut = async () => {
  const res = await fetch("/api/auth/logout");

  if (!res.ok) {
    const data = await res.json();
    return data;
  }

  if (res.redirected) {
    window.location.assign(res.url);
  }
};

const Header = () => {
  return (
    <header class={styles.header}>
      <button type="button" onClick={signOut}>
        Sign out
      </button>
    </header>
  );
};

export default Header;
