// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require("next-compose-plugins");

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
            "@app": path.resolve(__dirname, "app"),
            "@util": path.resolve(__dirname, "util"),
            "@types": path.resolve(__dirname, "types"),
            "@api": path.resolve(__dirname, "api"),
            "@components": path.resolve(__dirname, "components"),
            "@contexts": path.resolve(__dirname, "contexts"),
            "@lib": path.resolve(__dirname, "lib"),
            "@styles": path.resolve(__dirname, "styles"),
            "@hooks": path.resolve(__dirname, "hooks"),
        };
        return config;
    },
    experimental: {
        webpackBuildWorker: true,
    },
};

// バンドルアナライザ
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

// ネストしたい順に配列に渡す
const plugins = [withBundleAnalyzer];

// next.config.js
module.exports = withPlugins(plugins, nextConfig);
