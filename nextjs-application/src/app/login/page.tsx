// "use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import InputTextForm from "@components/elements/input/input-text-form";
import { NextPage } from "next";
// import { NextAuthProvider } from "../providers";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { signIn, useSession } from "next-auth/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
// import { useEffect } from "react";

/**
 * ログインページ
 * ログイン成功なら、ホームに飛ばす
 */
// const Login: NextPage = async () => {
const Page: NextPage = async () => {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    //const { data: session } = useSession();
    // const session = await getServerSession(authOptions);
    // useEffect(() => {
    //     console.log("api:" + session?.user.apiKey);
    //     console.log("user:" + session?.expires);
    // });

    return (
        <>
            <form method="post" action="http://localhost:3000/api/auth/callback/credentials">
                {/* <div>
                    url
                    <InputTextForm
                        inputName="url"
                        placeholder="https://{url}.backlog.comのurl部分を入力してください"
                    />
                </div>
                <div>
                    apikey
                    <InputTextForm
                        inputName="apikey"
                        placeholder="APIキーはbacklogの個人設定から払い出せます"
                    />
                </div> */}
                <label>
                    url
                    <input
                        type="text"
                        name="url"
                        placeholder="https://{url}.backlog.comのurl部分を入力してください"
                    />
                </label>
                <label>
                    apikey
                    <input
                        type="text"
                        name="apiKey"
                        placeholder="APIキーはbacklogの個人設定から払い出せます"
                    />
                </label>
                {/* <button type="submit" onClick={() => signIn()}> */}
                <button type="submit">サインイン</button>
            </form>
            {user?.url}:{user?.apiKey}
        </>
    );
    // const router = useRouter();
    // const submitEvent = () => {
    //     router.push("./");
    // };

    // return (
    //     <>
    //         <LoginFrom submitEvent={submitEvent}></LoginFrom>
    //     </>
    // );
};
export default Page;
