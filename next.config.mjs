/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [process.env.DOMIAN],  // Allow localhost for image domains
    },
  };
  
  export default nextConfig;
  