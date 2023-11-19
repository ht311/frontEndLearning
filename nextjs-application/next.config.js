// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    // リダイレクト定義
    async redirects() {
        return [
            {
                // ルート-> home
                source: "/",
                destination: "/home",
                permanent: true,
            },
        ];
    },
    // Imageタグが使用するホストの許可定義
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn2.thecatapi.com",
                port: "",
                pathname: "/**",
            },
        ],
    },

    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            // ディレクトリ構成が変更されたときに下記とtsconfig.jsonを変更すれば済むように定義
            "@api": path.resolve(__dirname, "api"),
            "@components": path.resolve(__dirname, "components"),
            "@contexts": path.resolve(__dirname, "contexts"),
        };
        return config;
    },
};

// next.config.js
module.exports = nextConfig;
