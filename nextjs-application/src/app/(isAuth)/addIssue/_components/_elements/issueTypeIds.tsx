import { fetcher } from "@api/fetcher";
import { Option, OptionsInit, Select } from "@components/elements/select/select-form";
import { GetProjectsRequest, GetProjectsResponse } from "@api/type/backlog/getProjects";
import { GetIssueTypeIdsRequest, GetIssueTypeIdsResponse } from "@api/type/backlog/getIssueTypeIds";
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

    const selectOptions: Option[] = await fetch(session.user);

    return (
        <Select
            options={selectOptions}
            inputName={name}
            placeholder="課題のタイプを選択してください"
            required={true}
        />
    );
};
export default IssueTypeIds;

// bff層があれば、priorities.tsxのようにAPI1本発行するだけで
// 画面にとって都合の良いレスポンスが返ってくる
const fetch = async (user: User): Promise<Option[]> => {
    // プロジェクトの一覧を取得
    const projects = await fetchProjects(user);

    for (const project of projects) {
        // プロジェクトIDに紐づく課題の種別を取得
        const issueTypes = await fetchIssueTypeIds(user, project.id);

        // 課題の種別をセレクタのoptionに変換
        return [
            ...OptionsInit,
            ...issueTypes.map((issueType) => {
                return { value: issueType.id, displayValue: issueType.name };
            }),
        ];
    }

    // 課題の種別が1つも取得できないときに到達(通常はありえないからエラーで返すべきかも)
    return OptionsInit;
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
