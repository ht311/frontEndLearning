import { fetcher } from "@api/fetcher";
import { GetProjectsRequest, GetProjectsResponse } from "@api/type/backlog/getProjects";
import { GetIssueTypeIdsRequest, GetIssueTypeIdsResponse } from "@api/type/backlog/getIssueTypeIds";
import GroupSelect, { GroupOption } from "@components/elements/select/select-group-form";
import { User } from "next-auth";
import { getServerSession } from "@util/sessionUtil";

type IssueTypeIdsProps = {
    name: string;
};

/**
 * 課題タイプのセレクタcomponent
 * @param name componentのname
 * @returns 概要の通り
 */
export const IssueTypeIds: React.FC<IssueTypeIdsProps> = async ({
    name,
}: IssueTypeIdsProps): Promise<JSX.Element> => {
    const session = await getServerSession();

    const groupOptions: GroupOption[] = await fetch(session.user);

    return <GroupSelect groupOptions={groupOptions} inputName={name} required={true} />;
};
export default IssueTypeIds;

// bff層があれば、priorities.tsxのようにAPI1本発行するだけで
// 画面にとって都合の良いレスポンスが返ってくる
const fetch = async (user: User): Promise<GroupOption[]> => {
    // プロジェクトの一覧を取得
    const projects = await fetchProjects(user);

    // プロジェクトに紐づく課題の種別を取得
    const groupOptions: GroupOption[] = [];
    for (const project of projects) {
        const { id, name } = project;
        // プロジェクトIDに紐づく課題の種別を取得
        const issueTypes = await fetchIssueTypeIds(user, id);

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
 * Backlogのプロジェクト一覧の取得 APIを発行する
 */
const fetchProjects = async (user: User): Promise<GetProjectsResponse> => {
    const req: GetProjectsRequest = new GetProjectsRequest(user);
    return await fetcher<GetProjectsResponse>(req);
};

/**
 * Backlogの種別一覧の取得 APIを発行する
 */
const fetchIssueTypeIds = async (
    user: User,
    projectId: number,
): Promise<GetIssueTypeIdsResponse> => {
    const req: GetIssueTypeIdsRequest = new GetIssueTypeIdsRequest(user, projectId);
    return await fetcher<GetIssueTypeIdsResponse>(req);
};
