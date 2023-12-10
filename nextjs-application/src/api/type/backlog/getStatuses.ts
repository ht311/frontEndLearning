import { BaseRequest, method } from "@api/fetcher";
import { User } from "next-auth";

/**
 * Backlogのプロジェクトの状態一覧の取得 APIのrequest
 * @link https://developer.nulab.com/ja/docs/backlog/api/2/get-status-list-of-project/#
 */
export class GetStatusesRequest implements BaseRequest {
    url: string;
    method: method;

    constructor({ url, apiKey }: User, projectIdOrKey: number | string) {
        this.url = `https://${url}.backlog.com/api/v2/projects/${projectIdOrKey}/statuses?apiKey=${apiKey}`;
        this.method = "GET";
    }
}

/**
 * Backlogのプロジェクトの状態一覧の取得 APIのresponse
 */
export type GetStatusesResponse = Response[];

type Response = {
    id: number;
    name: string;
};
