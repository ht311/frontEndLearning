import { BaseRequest, method } from "@api/fetcher";

/**
 * Backlogの認証ユーザー情報の取得 APIのrequest
 * @link https://developer.nulab.com/ja/docs/backlog/api/2/get-own-user/#
 */
export class MyselfRequest implements BaseRequest {
    url: string;
    method: method;

    constructor(url: string, apiKey: string) {
        this.url = `https://${url}.backlog.com/api/v2/users/myself?apiKey=${apiKey}`;
        this.method = "GET";
    }
}

/**
 * Backlogの認証ユーザー情報の取得 APIのresponse
 */
export type MyselfResponse = {
    userId: string;
    name: string;
};
