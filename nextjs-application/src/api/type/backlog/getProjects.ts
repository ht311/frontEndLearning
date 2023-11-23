import { BaseRequest, method } from "@api/fetcher";
import { User } from "next-auth";

/**
 * Backlogのプロジェクト一覧の取得 APIのrequest
 * @link https://developer.nulab.com/ja/docs/backlog/api/2/get-project-list/#
 */
export class GetProjectsRequest implements BaseRequest {
    url: string;
    method: method;

    constructor(user: User) {
        this.url = `https://${user.url}.backlog.com/api/v2/projects?apiKey=${user.apiKey}&archived=false`;
        this.method = "GET";
    }
}

/**
 * Backlogのプロジェクト一覧の取得 APIのresponse
 */
export type GetProjectsResponse = Response[];

type Response = {
    id: number;
    name: string;
};
