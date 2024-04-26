/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        CLIENT_DOMAIN: process.env.CLIENT_DOMAIN
    }
};

export default nextConfig;
