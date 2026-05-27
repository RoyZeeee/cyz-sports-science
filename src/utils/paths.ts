const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function href(path: string) {
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}
