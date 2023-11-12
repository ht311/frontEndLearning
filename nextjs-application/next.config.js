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
        ]
    },
}

//reactStrictMode:false

// next.config.js
module.exports = nextConfig
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
