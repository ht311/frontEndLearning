import { ReactNode } from "react";
import "../../styles/global.css";
import { Metadata } from "next";
import { NextAuthProvider } from "./providers";

const App = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="ja">
            <body>
                <NextAuthProvider>
                    <main>{children}</main>
                </NextAuthProvider>
            </body>
        </html>
    );
};

export default App;

export const metadata: Metadata = {
    title: "title",
    // 以下のように template を使用すると、他のレイアウトで title を設定時に `title | AppName` という形になる
    // title: {
    //   template: '%s | AppName',
    // },
    description: "description",
};
