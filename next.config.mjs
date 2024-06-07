/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mefpvvgnqqvpbqcxloyx.supabase.co",
      },
    ],
  },
};

export default nextConfig;
