import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The V1 has no server-only features. A static export gives Netlify a
  // concrete index.html and avoids relying on a runtime adapter for this site.
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
