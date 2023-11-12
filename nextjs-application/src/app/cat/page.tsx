"use client"
import Button from "@/components/elements/button";
import { NextPage } from "next";
import { useState } from "react";


export const Cat: NextPage<any> = () => {

    const [url,setUrl] = useState("")
    const onClick = async () => {
        const res = await handler()
        setUrl(res[0].url)
    }

    return (
        <>
            <Button onClick={onClick}>クリック</Button>
            <div><img src={url}></img></div>
        </>
    )
}
export default Cat

export type Image = {
    url: string
}

const handler = async (): Promise<Image[]> =>
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
            if (!response.ok) {
                return Promise.reject(new Error("API失敗"))
            }

            return response.json()
        })
        .catch((error: Error) => {
            console.error(error)
            throw error
        })
