import { BaseRequest, method } from "@api/fetcher";
import { User } from "next-auth";

/**
 * Backlogの課題情報の取得 APIのrequest
 * @link https://developer.nulab.com/ja/docs/backlog/api/2/get-issue/#
 */
export class GetIssueRequest implements BaseRequest {
    url: string;
    method: method;

    constructor(user: User | undefined, issueId: string) {
        // 原則ありえない
        if (!user) throw new Error("user未設定");

        this.url = `https://${user.url}.backlog.com/api/v2/issues/${issueId}?apiKey=${user.apiKey}`;
        this.method = "GET";
    }
}

/**
 * Backlogの課題情報の取得 APIのresponse
 */
export type GetIssueResponse = {
    summary: string;
    issueKey: string;
};
