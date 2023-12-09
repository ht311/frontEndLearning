import { fetcher } from "@api/fetcher";
import { GetProjectsRequest, GetProjectsResponse } from "@api/type/backlog/getProjects";
import { GetPrioritiesRequest, GetPrioritiesResponse } from "@api/type/backlog/getPriorities";
import { GetIssueTypeIdsRequest, GetIssueTypeIdsResponse } from "@api/type/backlog/getIssueTypeIds";
import { GroupOption } from "@components/elements/select/SelectFroupForm";
import { OptionsInit, Option } from "@components/elements/select/SelectForm";
import { User } from "next-auth";
import { getServerSession } from "@lib/nextAuth/util/sessionUtil";

export type SearchItemsContainerProps = {
    /** project */
    projectOptions: Option[];
    /** タスクのタイプ */
    issueTypeIdsOptions: GroupOption[];
    /** 優先度 */
    prioritiesOptions: Option[];
};

/**
 * 課題検索ページの検索項目をfetchする
 */
export const SearchItemsContainer = async (): Promise<SearchItemsContainerProps> => {
    const session = await getServerSession();
    if (!session) throw new Error();
    if (!session.user) throw new Error();

    const projects: GetProjectsResponse = await fetchProjects(session.user);
    const projectOptions = projectsToOptions(projects);

    const issueTypeIdsOptions = await fetchIssueTypeIds(session.user, projects);

    const prioritiesOptions = await fetchPriorities(session.user);

    return {
        projectOptions,
        issueTypeIdsOptions,
        prioritiesOptions,
    };
};
export default SearchItemsContainer;

/**
 * Backlogのプロジェクト一覧の取得 APIを発行する
 */
const fetchProjects = async (user: User): Promise<GetProjectsResponse> => {
    const req: GetProjectsRequest = new GetProjectsRequest(user);
    return fetcher<GetProjectsResponse>(req);
};

/**
 * projectsをOption[]に変換する
 */
const projectsToOptions = (projects: GetProjectsResponse) => {
    return [...projects.map((res) => ({ value: res.id, displayValue: res.name }))];
};

/**
 * Backlogの種別一覧の取得 APIを発行してGroupOption[]に変換する
 */
const fetchIssueTypeIds = async (
    user: User,
    projects: GetProjectsResponse,
): Promise<GroupOption[]> => {
    // プロジェクトに紐づく課題の種別を取得
    const groupOptions: GroupOption[] = [];
    for (const project of projects) {
        const { id, name } = project;
        // プロジェクトIDに紐づく課題の種別を取得
        const issueTypes = await fetchIssueTypeIdsApi(user, id);

        // 課題の種別をセレクタのoptionに変換
        const options = [
            ...issueTypes.map((issueType) => {
                return { value: issueType.id, displayValue: issueType.name };
            }),
        ];

        groupOptions.push({
            name,
            id: id.toString(),
            options,
        });
    }

    return groupOptions;
};

/**
 * Backlogの種別一覧の取得 APIを発行する
 */
const fetchIssueTypeIdsApi = async (
    user: User,
    projectId: number,
): Promise<GetIssueTypeIdsResponse> => {
    const req: GetIssueTypeIdsRequest = new GetIssueTypeIdsRequest(user, projectId);
    return fetcher<GetIssueTypeIdsResponse>(req);
};

/**
 * Backlogの優先度一覧の取得 APIを発行する
 */
const fetchPriorities = async (user: User): Promise<Option[]> => {
    const req: GetPrioritiesRequest = new GetPrioritiesRequest(user);
    const res: GetPrioritiesResponse = await fetcher<GetPrioritiesResponse>(req);
    if (!res) {
        return OptionsInit;
    }

    return [...res.map((res) => ({ value: res.id, displayValue: res.name }))];
};
