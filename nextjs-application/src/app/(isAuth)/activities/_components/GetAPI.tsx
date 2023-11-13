"use client"
import { fetcher } from "@/api/fetcher";
import { ActivityRequest, ActivityResponse } from "@/api/type/backlog/activities";
import Button from "@/components/elements/button";
import { UserAuth, UserAuthContext } from "@/contexts/userAuth/userAuth";
import { useContext, useState } from "react";


export const GetAPI: React.FC = ():JSX.Element => {
    const [mailAddress, setMailAddress] = useState("")
    const userAuth: UserAuth = useContext(UserAuthContext)
    const onClick = async () => {
        const req = new ActivityRequest(userAuth)
        const res = await fetcher<ActivityResponse>(req)
        setMailAddress(res[0].createdUser.lastLoginTime.toString())
    }

    return (
        <>
            <Button onClick={onClick}>クリック</Button>
            <div>{mailAddress}</div>
            <div>url:{userAuth.url}</div>
        </>
    )
}
export default GetAPI
