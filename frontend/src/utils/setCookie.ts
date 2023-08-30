export function setCookie(name: string, value: string) {
  const time = new Date();
  time.setTime(time.getTime() + 5 * 60 * 1000);

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  updatedCookie += `; expires=${time.toUTCString()}; path=/`;

  document.cookie = updatedCookie;
}
