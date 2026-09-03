/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Placeholder photography ships as optimized SVGs until real
    // Save Our Strays photography is migrated in (see /public/images/README.md).
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
