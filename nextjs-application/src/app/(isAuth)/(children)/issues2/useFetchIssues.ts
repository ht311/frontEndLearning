// Presenterに依存してはいけない
import { fetcher } from "@api/fetcher";
import { GetIssueRequest, Response as GetIssueResponse } from "@api/type/backlog/getIssueList";
import { GetProjectsRequest, GetProjectsResponse } from "@api/type/backlog/getProjects";
import useQueryString from "@hooks/useQueryString";
import { User } from "next-auth";
import { useSession } from "next-auth/react";
import { ChangeEvent, useEffect, useState } from "react";

type ReturnProps = {
    /**
     * onChangeイベント
     * elementに依存させることで、onChange発火時にAPIを発行して、issuesを更新する
     */
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    /**
     * fetch中(API発行中)はfalse
     */
    isLoading: boolean;
    /**
     * isLoadingがtrueの場合、課題検索結果
     * falseの場合、undefined
     */
    issues: CustomIssueResponse[] | undefined;
};

// 型を拡張して、プロジェクト名を追加で定義
// ※javaでDTOをextendsして、メンバを追加するのと同じ
// ※課題一覧APIの応答値には、プロジェクトIDは存在するが、プロジェクト名は存在しないため、
//   他のAPIを発行してプロジェクト名を導出する
export type CustomIssueResponse = { projectName: string } & GetIssueResponse;

/**
 * 課題検索をするHooks
 * NOTE:Hooksの責務はビジネスロジック
 * HACK:もう少し綺麗に書けそうだが、データフェッチの箇所をbffに任せればいいだけ？
 */
const useFetchIssues = (): ReturnProps => {
    const { data: session } = useSession();
    const [issues, setIssues] = useState<CustomIssueResponse[]>();
    const [isLoading, setLoading] = useState(true);
    const { updateQueryString, getQueryString } = useQueryString();

    // 検索処理
    const fetchIssueList = async (queryString: string) => {
        if (!session) return;
        setLoading(true);
        const res = await fetch(session.user, queryString);

        setIssues(res);
        setLoading(false);
    };

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        updateQueryString(event.target.name, event.target.value);
        fetchIssueList(getQueryString());
    };

    /**
     * 画面初期表示時の検索処理
     * マルチブラウザで操作していてsessionが変わった際にも動く
     */
    useEffect(
        () => {
            const abortController = new AbortController();

            if (!session) return;
            fetchIssueList(getQueryString());

            return () => {
                abortController.abort();
            };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [session],
    );

    return { onChange, isLoading, issues };
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
