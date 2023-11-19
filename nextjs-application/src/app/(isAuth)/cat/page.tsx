"use client";
import Button from "@components/elements/button/button";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

const Cat: NextPage = () => {
    const [url, setUrl] = useState("");
    const onClick = async () => {
        const res = await handler();
        setUrl(res[0].url);
    };

    // const userAuth:UserAuth = useContext(UserAuthContext)

    return (
        <>
            <Button onClick={onClick}>猫ちゃんの画像を表示する</Button>
            <div>
                {url && <Image src={url} alt="猫ちゃんの画像" width="500" height="500"></Image>}
            </div>
            {/* <div>url:{userAuth.url}</div> */}
        </>
    );
};
export default Cat;

type ImageResponse = {
    url: string;
};

const handler = async (): Promise<ImageResponse[]> =>
    fetch("https://api.thecatapi.com/v1/images/search")
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
