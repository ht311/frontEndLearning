// Presenterに依存してはいけない
import { fetcher } from "@api/fetcher";
import { GetIssueRequest, Response } from "@api/type/backlog/getIssueList";
import { GetProjectsRequest, GetProjectsResponse } from "@api/type/backlog/getProjects";
import { User } from "next-auth";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type ReturnProps = {
    /**
     * 再fetchしたい場合に呼ぶ
     */
    fetchIssueList: () => void;
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

type CustomIssueResponse = { projectName: string } & Response;

const useFetchIssues = (): ReturnProps => {
    const { data: session } = useSession();
    const [issues, setIssues] = useState<CustomIssueResponse[]>();
    const [isLoading, setLoading] = useState(true);

    const fetchIssueList = async () => {
        if (!session) return;
        setLoading(true);

        const res = await fetch(session.user);

        setIssues(res);
        setLoading(false);
    };

    useEffect(
        () => {
            const abortController = new AbortController();

            if (!session) return;
            fetchIssueList();

            return () => {
                abortController.abort();
            };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [session],
    );

    return { fetchIssueList, isLoading, issues };
};
export default useFetchIssues;

const fetch = async (user: User): Promise<CustomIssueResponse[]> => {
    const issues = await fetchIssues(user);
    const projects = await fetchProjects(user);

    issues.forEach((issue) => {
        const projectName = projects.find((project) => project.id === issue.projectId)?.name || "";
        issue.projectName = projectName;
    });
    return issues;
};

const fetchIssues = async (user: User): Promise<CustomIssueResponse[]> => {
    const req: GetIssueRequest = new GetIssueRequest(user);
    return fetcher<CustomIssueResponse[]>(req);
};

const fetchProjects = async (user: User): Promise<GetProjectsResponse> => {
    const req: GetProjectsRequest = new GetProjectsRequest(user);
    return fetcher<GetProjectsResponse>(req);
};
