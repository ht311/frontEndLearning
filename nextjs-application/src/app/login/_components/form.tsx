"use client"
import { FormEventHandler } from "react"
import { useState } from "react";
import InputText from "@/components/elements/input-text";
import { UserAuth } from "@/contexts/userAuth/userAuth";


export type LoginFromArgs = {
    submitEvent: () => void
}

export const LoginFrom: React.FC<LoginFromArgs> = ({ submitEvent }): JSX.Element => {

    // urlの状態管理
    const [url, setUrl] = useState("")
    const urlOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value)
    }

    // apikeyの状態管理
    const [apikey, setApikey] = useState("")
    const apikeyOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setApikey(event.target.value)
    }


    // form押下時の処理
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget)
        const url = form.get("url") || ""
        const apikey = form.get("apikey") || ""
        const res = await handler(url.toString(), apikey.toString())

        if (res.isOk) {
            const userAuth: UserAuth = {
                url: url.toString(),
                apikey: apikey.toString(),
                isAuth: true
            }
            window.localStorage.setItem("userAuth", JSON.stringify(userAuth))
            alert("LoginOK!!!")
            submitEvent()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                url:
                <InputText inputName="url" value={url} onChange={urlOnChange} />
            </div>
            <div>
                apikey:
                <InputText inputName="apikey" value={apikey} onChange={apikeyOnChange} />
            </div>
            <input type="submit" value="ログイン！"></input>
        </form>
    )
}
export default LoginFrom





export type Response = {
    isOk: boolean
}

const handler = async (url: string, apikey: string): Promise<Response> =>
    fetch(`https://${url}.backlog.com/api/v2/space?apiKey=${apikey}`)
        .then((response) => {
            if (!response.ok) {
                return { isOk: false }
            }

            //return response.json()
            return { isOk: true }
        })
        .catch((error: Error) => {
            console.error(error)
            return { isOk: false }
        })


