// Presenterに依存してはいけない
import { fetcher } from "@api/fetcher";
import { GetIssueRequest, Response as GetIssueResponse } from "@api/type/backlog/getIssueList";
import { GetProjectsRequest, GetProjectsResponse } from "@api/type/backlog/getProjects";
import { User } from "next-auth";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from "react";

type ReturnProps = {
    /**
     * 再fetchしたい場合に呼ぶ
     */
    // search: (event: ChangeEvent<HTMLInputElement>) => void;
    search: (event: FormEvent<HTMLFormElement>) => void;
    /**
     * fetch中はfalse
     */
    isLoading: boolean;
    /**
     * isLoadingがtrueの場合、応答値
     * falseの場合、undefined
     */
    issues: CustomIssueResponse[] | undefined;
};

// 型を拡張して、プロジェクト名を定義
// ※課題一覧APIの応答値には、プロジェクトIDは存在するが、プロジェクト名は存在しないため、
//   他のAPIを発行してプロジェクト名を導出する
type CustomIssueResponse = { projectName: string } & GetIssueResponse;

const useFetchIssues = (): ReturnProps => {
    const { data: session } = useSession();
    const searchParams = useSearchParams();
    const [issues, setIssues] = useState<CustomIssueResponse[]>();
    const [isLoading, setLoading] = useState(true);

    // 検索処理
    const fetchIssueList = async (queryString: string) => {
        if (!session) return;
        setLoading(true);
        const res = await fetch(session.user, queryString);

        setIssues(res);
        setLoading(false);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const search = (event: FormEvent<HTMLFormElement>) => {
        // const search = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log(searchParams.toString());
        fetchIssueList(searchParams.toString());
        event.preventDefault();
        // event.target.nodeValue;
        // const form = new FormData(event.currentTarget);
        // // // eslint-disable-next-line @typescript-eslint/no-unused-vars
        // const params = {
        //     projectId: form.get("projectId")?.toString() || "",
        //     summary: form.get("summary")?.toString() || "",
        //     issueTypeId: form.get("issueTypeId")?.toString() || "",
        //     priorityId: form.get("priorityId")?.toString() || "",
        // };

        // const res = await fetch(session.user);
    };

    // 画面初期表示時の検索
    useEffect(
        () => {
            const abortController = new AbortController();

            if (!session) return;
            fetchIssueList(searchParams.toString());

            return () => {
                abortController.abort();
            };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [session],
    );

    return { search, isLoading, issues };
};
export default useFetchIssues;

/**
 * データフェッチ
 */
const fetch = async (user: User, queryString: string): Promise<CustomIssueResponse[]> => {
    // 課題一覧API発行
    const issues = await fetchIssues(user, queryString);
    // プロジェクト名を導出するために、プロジェクト一覧API発行
    // ここは初回一回だけ発行で良いので性能改善の余地あり
    const projects = await fetchProjects(user);

    // 課題一覧APIの応答値のプロジェクトIDから、プロジェクト名を導出
    issues.forEach((issue) => {
        const projectName = projects.find((project) => project.id === issue.projectId)?.name || "";
        issue.projectName = projectName;
    });
    return issues;
};

/**
 * 課題一覧API発行
 */
const fetchIssues = async (user: User, queryString: string): Promise<CustomIssueResponse[]> => {
    const req: GetIssueRequest = new GetIssueRequest(user, queryString);
    return fetcher<CustomIssueResponse[]>(req);
};

/**
 * プロジェクト一覧API発行
 */
const fetchProjects = async (user: User): Promise<GetProjectsResponse> => {
    const req: GetProjectsRequest = new GetProjectsRequest(user);
    return fetcher<GetProjectsResponse>(req);
};
