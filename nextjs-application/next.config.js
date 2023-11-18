/** @type {import('next').NextConfig} */
const nextConfig = {
    // リダイレクト定義
    async redirects() {
        return [
            {
                // ルート-> home
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ];
    },
    // Imageタグが使用するホストの許可定義
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn2.thecatapi.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

//reactStrictMode:false

// next.config.js
module.exports = nextConfig;
// = {
//     async rewrites() {
//         return [
//             {
//                 source: "/",
//                 destination: "/src",
//             },
//         ];
//     },
// };
