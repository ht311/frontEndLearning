import { BaseRequest, method } from "@api/fetcher";
import { User } from "next-auth";

/**
 * Backlogの種別一覧の取得 APIのrequest
 * @link https://developer.nulab.com/ja/docs/backlog/api/2/get-issue-type-list/#
 */
export class GetIssueTypeIdsRequest implements BaseRequest {
    url: string;
    method: method;

    constructor(user: User, projectId: number) {
        this.url = `https://${user.url}.backlog.com/api/v2/projects/${projectId}/issueTypes?apiKey=${user.apiKey}`;
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
