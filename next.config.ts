import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (and any static host).
  output: "export",

  // Emit /imprint/index.html etc. so GitHub Pages can serve nested routes.
  trailingSlash: true,

  // next/image default optimizer needs a server; disable for static export.
  images: {
    unoptimized: true,
  },

  // Dev-only: allow iPhone/LAN and 127.0.0.1 to load Turbopack client chunks.
  // Safari requests crossorigin scripts with an Origin header; without this,
  // Next returns 403 → React never hydrates → menu/hamburger does nothing.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
