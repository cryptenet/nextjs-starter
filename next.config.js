/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        BRAND: 'Cryptenet',
    },
    images: {
        loader: 'akamai',
        path: '/',
    },
    distDir: 'out',
};

module.exports = nextConfig;
