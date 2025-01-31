/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "devfux-backend-production.up.railway.app" // Add your Railway backend domain
    ],
  },
};

export default nextConfig;