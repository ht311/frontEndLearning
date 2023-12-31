import { BaseRequest, method } from "@api/fetcher";
import { User } from "next-auth";

/**
 * Backlogの課題情報の取得 APIのrequest
 * @link https://developer.nulab.com/ja/docs/backlog/api/2/get-issue/#
 */
export class GetIssueRequest implements BaseRequest {
    url: string;
    method: method;

    constructor(user: User, issueId: string) {
        this.url = `https://${user.url}.backlog.com/api/v2/issues/${issueId}?apiKey=${user.apiKey}`;
        this.method = "GET";
    }
}

/**
 * Backlogの課題情報の取得 APIのresponse
 */
export type GetIssueResponse = {
    summary: string;
    projectId: number;
    issueKey: string;
    issueType: {
        id: number;
        name: string;
    };
    status: {
        id: number;
        name: string;
    };
    priority: {
        id: number;
        name: string;
    };
};
