"use client";
import Button from "@components/elements/button/button";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page: NextPage = () => {
    // React Hooks
    // useStateは単項目だけ管理するdtoに近いイメージ、imageUrlは変数、setImageUrlはsetter、useStateで指定した""は初期値
    const [imageUrl, setImageUrl] = useState("");

    // ボタン押下時の処理
    // ただの関数定義なので、呼ばれない限りは動かない
    // async function onClick() { 書き方が違うだけで同じ
    // 7行目のconst Page: NextPageも関数定義なので、これはクロージャ
    const onClick = async () => {
        // falsyな値を格納して、今表示している画像を消してloading...を表示する
        setImageUrl("");

        // API発行
        const res: ImageResponse[] = await handler();

        // レスポンスが気になるならコメントアウトを解除
        // client componentのため、ブラウザのconsoleに吐かれる
        // console.log(res[0].url);

        // 画像が複数返ってくるので、レスポンスの先頭明細のurlをimageUrlに設定
        setImageUrl(res[0].url);
    };

    // React Hooks
    // useEffectは下記のタイミングで第一引数の関数が実行される
    // - 画面が初期表示されきったとき
    // - 第二引数の状態が変更されたとき
    //   - 今回は第二引数が空なので、初期表示のときだけ動く
    // 第一引数は副作用関数、第二引数は副作用関数に依存する配列ってよく説明されてたりする
    useEffect(() => {
        const abortController = new AbortController();
        onClick();

        return () => {
            abortController.abort();
        };
    }, []);

    return (
        <>
            {/* このボタンを押下すると、onClickメソッドが呼ばれる */}
            <Button onClick={onClick}>猫ちゃんの画像を表示する</Button>
            {/* imageUrlがfalsyの場合、loading...を表示する実装。
                具体的には、画面の初期表示後に、APIを叩く(useEffectから発火)、
                レスポンスが返ってくるまでは、imageUrlが""(falsy)なので、loading...が表示される */}
            {imageUrl ? (
                <Image src={imageUrl} alt="猫ちゃんの画像" width="500" height="500"></Image>
            ) : (
                <div>loading...</div>
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
