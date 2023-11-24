"use client";
import { fetcher } from "@api/fetcher";
import { PostIssueRequest, PostIssueResponse, RequestParams } from "@api/type/backlog/postIssue";
import { FormEventHandler, ReactNode, Suspense, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

/**
 * 課題追加ページのformcomponent
 * @returns 概要の通り
 */
export const Form = ({ children }: { children: ReactNode }): JSX.Element => {
    const [issueKey, setIssueKey] = useState<string>("");
    const { data: session } = useSession();

    // form押下時の処理
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        if (!session) throw new Error();

        const form = new FormData(event.currentTarget);
        const params: RequestParams = {
            projectId: form.get("projectId")?.toString() || "",
            summary: form.get("summary")?.toString() || "",
            issueTypeId: form.get("issueTypeId")?.toString() || "",
            priorityId: form.get("priorityId")?.toString() || "",
        };

        const req: PostIssueRequest = new PostIssueRequest(session.user);
        req.setBody(params);

        const respose = await fetcher<PostIssueResponse>(req);

        if (respose) {
            setIssueKey(respose.issueKey);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Suspense fallback={<div>読み込み中</div>}>{children}</Suspense>
                <input type="submit" value="追加" />
            </form>
            {issueKey && <Link href={`./issue/${issueKey}`}>課題が追加されました</Link>}
        </>
    );
};
export default Form;
