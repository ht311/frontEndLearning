// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

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
    // パスエイリアスはtsconfig.jsonのpathsで定義済み。Turbopackが自動で読み込む。
    turbopack: {},
};

module.exports = withBundleAnalyzer(nextConfig);
