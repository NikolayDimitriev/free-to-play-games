export function changeFormat(date: string) {
  return date.split("-").reverse().join(".");
}
