"use client"
import Button from "@/components/elements/button";
import { UserAuth, UserAuthContext } from "@/contexts/userAuth/userAuth";
import { NextPage } from "next";
import { useContext, useState } from "react";


export const Activities: NextPage<any> = () => {
    const [mailAddress, setMailAddress] = useState("")
    const userAuth: UserAuth = useContext(UserAuthContext)
    const onClick = async () => {
        const res = await handler(userAuth)
        setMailAddress(res[0].createdUser.mailAddress)
    }

    return (
        <>
            <Button onClick={onClick}>クリック</Button>
            <div>{mailAddress}</div>
            <div>url:{userAuth.url}</div>
        </>
    )
}
export default Activities

type Activity = {
    id: number,
    project: {
        id: number,
        projectKey: string,
        name: string,
        chartEnabled: boolean,
        useResolvedForChart: boolean,
        subtaskingEnabled: boolean,
        projectLeaderCanEditProjectLeader: boolean,
        useWiki: boolean,
        useFileSharing: boolean,
        useWikiTreeView: boolean,
        useOriginalImageSizeAtWiki: boolean,
        textFormattingRule: string,
        archived: boolean,
        displayOrder: number,
        useDevAttributes: boolean
    },
    type: number,
    content: {
        id: number,
        key_id: number,
        summary: string,
        description: string
    },
    createdUser: {
        id: number,
        userId: string,
        name: string,
        roleType: number,
        lang: string,
        mailAddress: string,
        nulabAccount: {
            nulabId: string,
            name: string,
            uniqueId: string
        },
        keyword: string,
        lastLoginTime: Date
    }
}

const handler = async (userAuth: UserAuth): Promise<Activity[]> =>
    fetch(`https://${userAuth.url}.backlog.com/api/v2/space/activities?apiKey=${userAuth.apikey}`)
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
