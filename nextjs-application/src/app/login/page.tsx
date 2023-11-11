"use client"
import { NextPage } from "next";
import Button from "../../../components/elements/button";
import {FormEventHandler} from "react"
import { useState } from "react";
import LoginFrom from "./_components/form";
import { useRouter } from "next/navigation";


export const Login: NextPage<any> = () => {

    // const [url,setUrl] = useState("")
    // const onClick = async () => {
    //     const res = await handler()
    //     setUrl(res[0].url)
    // }
    const router = useRouter()

    const submitEvent = ()=>{
        router.push("./")
    }

    return (
        <>
            <LoginFrom submitEvent={submitEvent}></LoginFrom>
        </>
    )
}
export default Login

// export type Image = {
//     url: string
// }

// const handler = async (): Promise<Image[]> =>
//     fetch("https://api.thecatapi.com/v1/images/search")
//         .then((response) => {
//             if (!response.ok) {
//                 return Promise.reject(new Error("API失敗"))
//             }

//             return response.json()
//         })
//         .catch((error: Error) => {
//             console.error(error)
//             throw error
//         })
