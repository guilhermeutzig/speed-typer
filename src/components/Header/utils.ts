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
