import type { NextConfig } from "next";

/** Set in CI for project Pages (`/repo`); empty for local/custom-domain root. */
const pagesBasePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (and any static host).
  output: "export",

  // Emit /imprint/index.html etc. so GitHub Pages can serve nested routes.
  trailingSlash: true,

  // next/image default optimizer needs a server; disable for static export.
  images: {
    unoptimized: true,
  },

  // Only when deploying under a repository subpath on github.io.
  ...(pagesBasePath
    ? {
        basePath: pagesBasePath,
        assetPrefix: pagesBasePath,
      }
    : {}),

  // Available to client components (e.g. next/image src under a basePath).
  env: {
    NEXT_PUBLIC_BASE_PATH: pagesBasePath,
  },

  // Dev-only: allow 127.0.0.1 to load Turbopack client chunks.
  // Safari requests crossorigin scripts with an Origin header; without this,
  // Next returns 403 → React never hydrates → menu/hamburger does nothing.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
