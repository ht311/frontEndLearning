"use client";
import { fetcher } from "@api/fetcher";
import { GetIssueRequest, GetIssueResponse } from "@api/type/backlog/getIssue";
import { UserAuth } from "@contexts/userAuth/userAuth";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type DetailProps = {
    id: string;
};

export const Detail: React.FC<DetailProps> = ({ id }: DetailProps): JSX.Element => {
    const [issueResponse, setIssueResponse] = useState<GetIssueResponse>();
    const { data: session } = useSession();

    const userAuth: UserAuth = {
        url: session?.user.url || "",
        apikey: session?.user.apiKey || "",
        isAuth: true,
    };

    const onload = async () => {
        const req = new GetIssueRequest(userAuth, id);
        const res = await fetcher<GetIssueResponse>(req);
        setIssueResponse(res);
    };

    useEffect(() => {
        onload();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {issueResponse?.summary && <div>課題名:{issueResponse.summary}</div>}
            {issueResponse?.issueKey && <div>課題キー:{issueResponse.issueKey}</div>}
        </>
    );
};
export default Detail;
