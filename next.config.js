/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['picsum.photos', 'i.ibb.co', 'via.placeholder.com'],
      },
      env: {
        NEXT_PUBLIC_PHONE_NUMBER: process.env.NEXT_PUBLIC_PHONE_NUMBER,
      }
}

module.exports = nextConfig
