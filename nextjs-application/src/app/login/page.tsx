"use client"
import { NextPage } from "next";
import LoginFrom from "./_components/form";
import { useRouter } from "next/navigation";


/**
 * ログインページ
 * ログイン成功なら、ホームに飛ばす
 */
export const Login: NextPage<any> = () => {

    const router = useRouter()
    const submitEvent = () => {
        router.push("./")
    }

    return (
        <>
            <LoginFrom submitEvent={submitEvent}></LoginFrom>
        </>
    )
}
export default Login
