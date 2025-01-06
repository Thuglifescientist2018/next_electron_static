/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',        // Enables static export
    images: {
        unoptimized: true,  // Disables Next.js image optimization
    },
    assetPrefix: './',       // Ensures relative paths for all static assets
    basePath: '',            // No additional base path
};

export default nextConfig;
