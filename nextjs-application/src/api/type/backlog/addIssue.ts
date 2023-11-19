import { BaseRequest, method } from "@api/fetcher";
import { UserAuth } from "@contexts/userAuth/userAuth";

/**
 * Backlogのadd-issue APIのrequest
 * @link https://developer.nulab.com/ja/docs/backlog/api/2/add-issue/#
 */
export class AddIssueRequest implements BaseRequest {
    url: string;
    method: method;
    headers: HeadersInit;
    body?: BodyInit;

    constructor(userAuth: UserAuth) {
        this.url = `https://${userAuth.url}.backlog.com/api/v2/issues?apiKey=${userAuth.apikey}`;
        this.method = "POST";
        this.headers = {
            "Content-Type": "application/x-www-form-urlencoded",
        };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setBody(params: RequestParams) {
        // const fetch = require("node-fetch");
        // let formBody: string[] = [];
        // Object.keys(body).forEach((key) => {
        //     const encodedKey = encodeURIComponent(key);
        //     const s = body.get(key)?.toString() || "";
        //     const encodedValue = encodeURIComponent(s);
        //     formBody.push(encodedKey + "=" + encodedValue);
        // });
        // this.body = formBody.join("&");
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
export type AddIssueResponse = {
    issueKey: string;
};
