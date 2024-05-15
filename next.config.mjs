

  /** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},

  images: {
    domains: ['devfolio.com','project1.com','project2.com','project3.com','ibb.co','*']
  }
};

export default nextConfig;