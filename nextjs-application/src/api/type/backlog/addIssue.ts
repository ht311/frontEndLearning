import { BaseRequest, method } from "@/api/fetcher";
import { UserAuth } from "@/contexts/userAuth/userAuth";

/**
 * Backlogのadd-issue APIのrequest
 * @link https://developer.nulab.com/ja/docs/backlog/api/2/add-issue/#
 */
export class AddIssueRequest implements BaseRequest {
    url: string;
    method: method;
    headers: HeadersInit;
    body?: FormData;

    constructor(userAuth: UserAuth) {
        this.url = `https://${userAuth.url}.backlog.com/api/v2/issues?apiKey=${userAuth.apikey}`;
        this.method = "POST";
        this.headers = { "Content-Type": "application/x-www-form-urlencoded" };
    }

    setBody(body: FormData) {
        this.body = body;
    }
}

/**
 * Backlogのadd-issue APIのresponse
 */
export type AddIssueResponse = Activity[];

type Activity = {
    id: number;
    project: {
        id: number;
        projectKey: string;
        name: string;
        chartEnabled: boolean;
        useResolvedForChart: boolean;
        subtaskingEnabled: boolean;
        projectLeaderCanEditProjectLeader: boolean;
        useWiki: boolean;
        useFileSharing: boolean;
        useWikiTreeView: boolean;
        useOriginalImageSizeAtWiki: boolean;
        textFormattingRule: string;
        archived: boolean;
        displayOrder: number;
        useDevAttributes: boolean;
    };
    type: number;
    content: {
        id: number;
        key_id: number;
        summary?: string;
        name?: string;
        description: string;
    };
    createdUser: {
        id: number;
        userId: string;
        name: string;
        roleType: number;
        lang: string;
        mailAddress: string;
        nulabAccount: {
            nulabId: string;
            name: string;
            uniqueId: string;
        };
        keyword: string;
        lastLoginTime: Date;
    };
};
