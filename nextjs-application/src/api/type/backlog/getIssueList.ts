import { BaseRequest, method } from "@api/fetcher";
import { User } from "next-auth";

/**
 * Backlogの課題一覧の取得 APIのrequest
 * @link https://developer.nulab.com/ja/docs/backlog/api/2/get-issue-list/#
 */
export class GetIssueRequest implements BaseRequest {
    url: string;
    method: method;

    constructor(user: User, queryString: string) {
        this.url = `https://${user.url}.backlog.com/api/v2/issues?apiKey=${user.apiKey}&count=10&${queryString}`;
        this.method = "GET";
    }
}

/**
 * Backlogの課題情報の取得 APIのresponse
 */
export type GetIssueResponse = Response[];

export type Response = {
    projectId: number;
    issueKey: string;
    summary: string;
    issueType: {
        id: number;
        name: string;
    };
    priority?: { id: number; name: string };
    status: {
        id: number;
        name: string;
    };
    assignee?: {
        id: number;
        name: string;
    };
    dueDate: Date | null; //"2023-11-22T00:00:00Z",
};
