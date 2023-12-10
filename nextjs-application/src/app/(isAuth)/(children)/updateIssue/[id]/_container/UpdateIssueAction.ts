"use server";
import { fetcher } from "@api/fetcher";
import { PatchIssueRequest, PatchIssueResponse, RequestParams } from "@api/type/backlog/patchIssue";
import { getServerSession } from "@lib/nextAuth/util/sessionUtil";
import { UpdateIssueActionResponse } from "./types";
/**
 * 課題追加ページのフォーム押下のserverAction
 * serverActionにすることで、ブラウザがDLするjsを削減できる
 */
const UpdateIssueAction = async (
    state: UpdateIssueActionResponse,
    form: FormData,
): Promise<UpdateIssueActionResponse> => {
    const session = getServerSession();

    // make request
    const params: RequestParams = {
        summary: form.get("summary")?.toString() || "",
        statusId: form.get("statusId")?.toString() || "",
        issueTypeId: form.get("issueTypeId")?.toString() || "",
        priorityId: form.get("priorityId")?.toString() || "",
    };

    const req = new PatchIssueRequest.Builder((await session).user, state.issueIdOrKey || "")
        .params(params)
        .build();

    // fetch
    return fetcher<PatchIssueResponse>(req);
};
export default UpdateIssueAction;
