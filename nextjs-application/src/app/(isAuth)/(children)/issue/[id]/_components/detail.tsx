"use client";
import { fetcher } from "@api/fetcher";
import { GetIssueRequest, GetIssueResponse } from "@api/type/backlog/getIssue";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type DetailProps = {
    id: string;
};

export const Detail: React.FC<DetailProps> = ({ id }: DetailProps): JSX.Element => {
    const [issueResponse, setIssueResponse] = useState<GetIssueResponse>();
    const { data: session } = useSession();
    if (!session) return <></>;

    const onload = async () => {
        const req = new GetIssueRequest(session.user, id);
        const res = await fetcher<GetIssueResponse>(req);
        setIssueResponse(res);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
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
