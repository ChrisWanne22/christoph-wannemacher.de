/** App base path from Next config (`PAGES_BASE_PATH` in CI). Empty at domain root. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a root-absolute path for static assets when a basePath is active. */
export function withBasePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${BASE_PATH}${path}`;
}
