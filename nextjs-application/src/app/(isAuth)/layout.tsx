// "use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactNode, useEffect, useState } from "react";
import "../../../styles/global.css";
import Layout from "@components/layouts/layout";
import { Metadata } from "next";
// import UserAuthProvider from "@contexts/userAuth/userAuthProvider";
// import { UserAuth } from "@contexts/userAuth/userAuth";
// import { useRouter } from "next/navigation";
// import { Metadata } from "next";

const App = ({ children }: { children: ReactNode }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [userAuth, setUserAuth] = useState<UserAuth>({ apikey: "", url: "", isAuth: false });
    // const router = useRouter();
    // useEffect(() => {
    //     //console.log(window.localStorage.getItem("userAuth"))
    //     const userAuthJson = window.localStorage.getItem("userAuth") || "{}";
    //     //window.localStorage.removeItem("userAuth")
    //     // 未ログイン時は、login画面に飛ばす
    //     if (userAuthJson === "{}") {
    //         router.push("./login");
    //         return;
    //     }

    //     // 認証失敗で到達不可のはずだが、念のため
    //     setUserAuth(JSON.parse(userAuthJson));
    //     // なぜか空になる...
    //     //console.log("ここ")
    //     //console.log(userAuth)
    //     // if (!(userAuth && userAuth.isAuth)) {
    //     //     router.push("./login")
    //     //     return
    //     // }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return (
        <Layout>
            {/* <UserAuthProvider userAuth={userAuth}>{children}</UserAuthProvider> */}
            {children}
        </Layout>
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
