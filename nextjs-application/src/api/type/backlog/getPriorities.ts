import { BaseRequest, method } from "@api/fetcher";
import { UserAuth } from "@contexts/userAuth/userAuth";

/**
 * Backlogの優先度一覧の取得 APIのrequest
 * @link https://developer.nulab.com/ja/docs/backlog/api/2/get-priority-list/#
 */
export class GetPrioritiesRequest implements BaseRequest {
    url: string;
    method: method;

    constructor(userAuth: UserAuth) {
        this.url = `https://${userAuth.url}.backlog.com/api/v2/priorities?apiKey=${userAuth.apikey}&archived=false`;
        this.method = "GET";
    }
}

/**
 * Backlogの優先度一覧の取得 APIのresponse
 */
export type GetPrioritiesResponse = Response[];

type Response = {
    id: number;
    name: string;
};
