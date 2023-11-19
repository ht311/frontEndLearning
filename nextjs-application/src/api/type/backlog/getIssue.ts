import { BaseRequest, method } from "@api/fetcher";
import { UserAuth } from "@contexts/userAuth/userAuth";

/**
 * Backlogの課題情報の取得 APIのrequest
 * @link https://developer.nulab.com/ja/docs/backlog/api/2/get-issue/#
 */
export class GetIssueRequest implements BaseRequest {
    url: string;
    method: method;

    constructor(userAuth: UserAuth, issueId: string) {
        this.url = `https://${userAuth.url}.backlog.com/api/v2/issues/${issueId}?apiKey=${userAuth.apikey}`;
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
