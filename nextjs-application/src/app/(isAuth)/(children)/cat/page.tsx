"use client";
import Button from "@components/elements/button/button";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

const Page: NextPage = () => {
    // React Hooksの1機能、useState
    // hooksは状態管理をしてくれる
    // dtoに近いイメージ、imageUrlは変数、setImageUrlはsetter、useStateで指定した""は初期値
    const [imageUrl, setImageUrl] = useState("");

    // ボタン押下時の処理
    // ただの関数定義なので、呼ばれない限りは動かない
    // async function onClick() { 書き方が違うだけで同じ
    // 7行目のconst Page: NextPageも関数定義なので、これはクロージャ
    const onClick = async () => {
        // API発行
        const res: ImageResponse[] = await handler();
        // 画像が複数返ってくるので、レスポンスの先頭明細のurlをimageUrlに設定
        setImageUrl(res[0].url);
    };

    return (
        <>
            {/* このボタンを押下すると、onClickメソッドが呼ばれる */}
            <Button onClick={onClick}>猫ちゃんの画像を表示する</Button>
            {/* imageUrlがnullや""の場合、レンダリングされない */}
            {imageUrl && (
                <div>
                    <Image src={imageUrl} alt="猫ちゃんの画像" width="500" height="500"></Image>
                </div>
            )}
        </>
    );
};
// exportすると他のjs,tsから呼び出せるようになる(publicのイメージ)
export default Page;

/**
 * APIの応答値の型定義
 */
type ImageResponse = {
    url: string;
};

/**
 * APIを叩いて応答値のjsonをImageResponseのリストにして返す
 */
const handler = async (): Promise<ImageResponse[]> =>
    await fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
            if (!response.ok) {
                return Promise.reject(new Error("API失敗"));
            }

            return response.json();
        })
        .catch((error: Error) => {
            console.error(error);
            throw error;
        });
