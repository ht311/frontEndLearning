import Favicon from "/public/images/favicon.ico";
import { ReactNode } from "react";
import "@styles/global.css";
import { Metadata } from "next";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="ja">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default Layout;

export const metadata: Metadata = {
    title: {
        // このleyout配下にMetadataが定義されている かつ titleを設定している場合、%s | Nextjs-Sampleの形式でタイトルが表示される
        default: "Nextjs-Sample",
        template: "%s | Nextjs-Sample",
    },
    description: "Nextjs v13で作成したアプリケーションです",
    icons: [{ rel: "icon", url: Favicon.src }],
};
