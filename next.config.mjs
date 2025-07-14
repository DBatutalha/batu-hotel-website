/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    importAttributes: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cqwwgiyxeyyozzrbrdui.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
        search: "",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
