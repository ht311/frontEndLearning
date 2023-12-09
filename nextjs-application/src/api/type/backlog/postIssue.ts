import { Builer } from "@lib/designPattern/Builder";
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
    body: BodyInit;

    private constructor(user: User, body: BodyInit) {
        this.url = `https://${user.url}.backlog.com/api/v2/issues?apiKey=${user.apiKey}`;
        this.method = "POST";
        this.headers = {
            "Content-Type": "application/x-www-form-urlencoded",
        };
        this.body = body;
    }

    // Builderパターン
    public static Builder = class PostIssueRequestBuilder implements Builer<PostIssueRequest> {
        user: User;
        requestParams?: RequestParams;

        constructor(user: User) {
            this.user = user;
        }

        params(params: RequestParams): PostIssueRequestBuilder {
            this.requestParams = params;
            return this;
        }

        // @Override
        build(): PostIssueRequest {
            if (!this.requestParams) throw new Error("パラメータ未設定");

            const body = this.buildBody(this.requestParams);
            return new PostIssueRequest(this.user, body);
        }

        private buildBody(params: RequestParams): BodyInit {
            const searchParams: string[][] = [];
            for (const [key, value] of Object.entries(params)) {
                searchParams.push([key.toString(), value.toString()]);
            }
            return new URLSearchParams(searchParams);
        }
    };
}

export type RequestParams = {
    projectId?: string;
    summary?: string;
    issueTypeId?: string;
    priorityId: string;
};

/**
 * Backlogのadd-issue APIのresponse
 */
export type PostIssueResponse = {
    issueKey: string;
};
