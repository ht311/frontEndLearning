import Favicon from "/public/images/favicon.ico";
import "@styles/global.css";
import { Metadata } from "next";
// import styles from "./layout.module.css";

const Layout = ({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) => {
    return (
        <html lang="ja">
            {/* <body className={styles.body}> */}
            <body>
                <main>
                    {children}
                    {modal}
                </main>
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
