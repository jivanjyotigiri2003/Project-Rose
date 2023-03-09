/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
      domains: ['res.cloudinary.com',"ik.imagekit.io"],
  },
  
}

module.exports = nextConfig
