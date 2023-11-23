import { BaseRequest, method } from "@api/fetcher";
import { User } from "next-auth";
/**
 * Backlogのadd-issue APIのrequest
 * @link https://developer.nulab.com/ja/docs/backlog/api/2/add-issue/#
 */
export class PostIssueRequest implements BaseRequest {
    url: string;
    method: method;
    headers: HeadersInit;
    body?: BodyInit;

    constructor(user: User) {
        this.url = `https://${user.url}.backlog.com/api/v2/issues?apiKey=${user.apiKey}`;
        this.method = "POST";
        this.headers = {
            "Content-Type": "application/x-www-form-urlencoded",
        };
    }

    setBody(params: RequestParams) {
        const searchParams: string[][] = [];
        for (const [key, value] of Object.entries(params)) {
            searchParams.push([key.toString(), value.toString()]);
        }
        this.body = new URLSearchParams(searchParams);
    }
}

export type RequestParams = {
    projectId: string;
    summary: string;
    issueTypeId: string;
    priorityId: string;
};

/**
 * Backlogのadd-issue APIのresponse
 */
export type PostIssueResponse = {
    issueKey: string;
};
