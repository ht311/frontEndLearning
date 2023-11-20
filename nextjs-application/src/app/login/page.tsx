"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import InputTextForm from "@components/elements/input/input-text-form";
import { NextPage } from "next";
import { NextAuthProvider } from "../providers";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { signIn, useSession } from "next-auth/react";

/**
 * ログインページ
 * ログイン成功なら、ホームに飛ばす
 */
const Login: NextPage = () => {
    // const session = await getServerSession(authOptions)
    // const user=session?.user
    const { data: session } = useSession();

    return (
        <NextAuthProvider>
            <form method="post" action="/api/auth/callback/credentials">
                <label>
                    url
                    <InputTextForm
                        inputName="url"
                        placeholder="https://{url}.backlog.comのurl部分を入力してください"
                    />
                </label>
                <label>
                    apikey
                    <InputTextForm
                        inputName="apikey"
                        placeholder="APIキーはbacklogの個人設定から払い出せます"
                    />
                </label>
                <button type="submit" onClick={() => signIn()}>
                    サインイン
                </button>
            </form>
            {session?.user.apiKey}
        </NextAuthProvider>
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
export default Login;
