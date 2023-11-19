import { BaseRequest, method } from "@api/fetcher";
import { UserAuth } from "@contexts/userAuth/userAuth";

/**
 * Backlogの種別一覧の取得 APIのrequest
 * @link https://developer.nulab.com/ja/docs/backlog/api/2/get-issue-type-list/#
 */
export class GetIssueTypeIdsRequest implements BaseRequest {
    url: string;
    method: method;

    constructor(userAuth: UserAuth, projectId: number) {
        this.url = `https://${userAuth.url}.backlog.com/api/v2/projects/${projectId}/issueTypes?apiKey=${userAuth.apikey}`;
        this.method = "GET";
    }
}

/**
 * Backlogの種別一覧の取得 APIのresponse
 */
export type GetIssueTypeIdsResponse = IssueTypeIdsResponse[];

export type IssueTypeIdsResponse = {
    id: number;
    projectId: number;
    name: string;
};
