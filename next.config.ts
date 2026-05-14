import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Tells Next.js to produce static HTML/CSS/JS
  basePath: "/blog-preview-card", // This adds the prefix to all links and assets,
  trailingSlash: true,
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't support Next.js default Image Optimization
  },
  // If your site is NOT at a custom domain (e.g., username.github.io/repo-name/)
  // you MUST set the basePath to your repository name.
  // basePath: '/your-repo-name',
};

export default nextConfig;
