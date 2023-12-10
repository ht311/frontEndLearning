import { BaseRequest, method } from "@api/fetcher";
import { Builer } from "@lib/designPattern/Builder";
import { User } from "next-auth";

/**
 * Backlogの課題情報の更新 APIのrequest
 * @link https://developer.nulab.com/ja/docs/backlog/api/2/update-issue/#
 */
export class PatchIssueRequest implements BaseRequest {
    url: string;
    method: method;
    headers: HeadersInit;
    body: BodyInit;

    private constructor({ url, apiKey }: User, issueIdOrKey: string, body: BodyInit) {
        this.url = `https://${url}.backlog.com/api/v2/issues/${issueIdOrKey}?apiKey=${apiKey}`;
        this.method = "PATCH";
        this.headers = {
            "Content-Type": "application/x-www-form-urlencoded",
        };
        this.body = body;
    }

    // Builderパターン
    public static Builder = class PatchIssueRequestBuilder implements Builer<PatchIssueRequest> {
        user: User;
        issueIdOrKey: string;
        requestParams?: RequestParams;

        constructor(user: User, issueIdOrKey: string) {
            this.user = user;
            this.issueIdOrKey = issueIdOrKey;
        }

        params(params: RequestParams): PatchIssueRequestBuilder {
            this.requestParams = params;
            return this;
        }

        // @Override
        build(): PatchIssueRequest {
            if (!this.requestParams) throw new Error("パラメータ未設定");

            const body = this.buildBody(this.requestParams);
            return new PatchIssueRequest(this.user, this.issueIdOrKey, body);
        }

        private buildBody(params: RequestParams): BodyInit {
            const searchParams: string[][] = [];
            for (const [key, value] of Object.entries(params)) {
                const v = value.toString();
                if (!v) continue;

                searchParams.push([key.toString(), v]);
            }

            return new URLSearchParams(searchParams);
        }
    };
}

export type RequestParams = {
    /** 課題の件名 */
    summary: string;
    // 参照APIの応答値をformに設定して、formから更新APIに渡すことが前提なので、厳密な型付けは不要と判断
    // 不正な値はAPI側でバリデートもするため
    /** 状態のId */
    statusId?: string;
    /** 種別のID */
    issueTypeId: string;
    /** 優先度のID */
    priorityId: string;
};

/**
 * Backlogの課題情報の更新 APIのresponse
 */
export type PatchIssueResponse = {
    id: number;
    name: string;
};
