import { fetcher } from "@api/fetcher";
import { PostIssueRequest, PostIssueResponse, RequestParams } from "@api/type/backlog/postIssue";
import { FormEvent, FormEventHandler, useState } from "react";
import { useSession } from "next-auth/react";

type ReturnProps = {
    /**
     * form押下時にcall
     */
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    /**
     * submitした結果
     * 一度もsubmitしていない場合、undefined
     */
    postIssueResponse: PostIssueResponse | undefined;
};

/**
 * 課題追加ページのフォーム押下のhooks
 * @returns ReturnProps参照
 */
const useFormAddIssue = (): ReturnProps => {
    const [postIssueResponse, setPostIssueResponse] = useState<PostIssueResponse>();
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
        setPostIssueResponse(respose);
    };

    return { handleSubmit, postIssueResponse };
};
export default useFormAddIssue;
