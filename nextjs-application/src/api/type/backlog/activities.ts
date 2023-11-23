import { BaseRequest, method } from "@api/fetcher";
import { User } from "next-auth";

/**
 * Backlogのactivity APIのrequest
 * @link https://developer.nulab.com/ja/docs/backlog/api/2/get-recent-updates/#
 */
export class ActivityRequest implements BaseRequest {
    url: string;
    method: method;

    constructor(user: User | undefined) {
        // 原則ありえない
        if (!user) throw new Error("user未設定");

        this.url = `https://${user.url}.backlog.com/api/v2/space/activities?apiKey=${user.apiKey}`;
        this.method = "GET";
    }
    // constructor(url: string, apiKey: string) {
    //     this.url = `https://${url}.backlog.com/api/v2/space/activities?apiKey=${apiKey}`;
    //     this.method = "GET";
    // }
}

/**
 * Backlogのactivity APIのresponse
 */
export type ActivityResponse = Activity[];

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
