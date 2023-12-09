"use server";
import { fetcher } from "@api/fetcher";
import { PostIssueRequest, PostIssueResponse, RequestParams } from "@api/type/backlog/postIssue";
import { getServerSession } from "@util/sessionUtil";

type FormAddIssueActionResponse = PostIssueResponse | undefined;

/**
 * 課題追加ページのフォーム押下のserver Action
 */
const FormAddIssueAction = async (
    _state: FormAddIssueActionResponse,
    form: FormData,
): Promise<FormAddIssueActionResponse> => {
    const session = getServerSession();

    // make request
    const params: RequestParams = {
        projectId: form.get("projectId")?.toString() || "",
        summary: form.get("summary")?.toString() || "",
        issueTypeId: form.get("issueTypeId")?.toString() || "",
        priorityId: form.get("priorityId")?.toString() || "",
    };
    const req: PostIssueRequest = new PostIssueRequest((await session).user);
    req.setBody(params);

    // fetch
    return fetcher<FormAddIssueActionResponse>(req);
};
export default FormAddIssueAction;
