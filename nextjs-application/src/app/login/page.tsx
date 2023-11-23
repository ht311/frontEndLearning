"use client";
import ErrorDiv from "@components/elements/div/error-div";
import InputTextForm from "@components/elements/input/input-text-form";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

/**
 * ログインページ
 * ログイン成功なら、ホームに飛ばす
 */
const Page: NextPage = () => {
    const router = useRouter();
    const [isError, setError] = useState(false);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const url = form.get("url") || "";
        const apiKey = form.get("apiKey") || "";

        await signIn("credentials", {
            redirect: false,
            url,
            apiKey,
        }).then((res) => {
            if (res?.error) {
                setError(true);
            } else {
                router.push("/home");
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                url
                <InputTextForm
                    inputName="url"
                    placeholder="https://{url}.backlog.comのurl部分を入力してください"
                    required={true}
                />
            </div>
            <div>
                apikey
                <InputTextForm
                    inputName="apiKey"
                    placeholder="APIキーはbacklogの個人設定から払い出せます"
                    required={true}
                />
            </div>
            {isError && <ErrorDiv>url、apikeyの組み合わせに誤りがあります。</ErrorDiv>}
            <button type="submit">ログイン</button>
        </form>
    );
};
export default Page;
