import { fetcher } from "@api/fetcher";
import { GetProjectsRequest, GetProjectsResponse } from "@api/type/backlog/getProjects";
import { GetPrioritiesRequest, GetPrioritiesResponse } from "@api/type/backlog/getPriorities";
import { GetIssueTypeIdsRequest, GetIssueTypeIdsResponse } from "@api/type/backlog/getIssueTypeIds";
import { GroupOption } from "@components/elements/select/SelectFroupForm";
import { OptionsInit, Option } from "@components/elements/select/SelectForm";
import { getServerSession } from "@lib/nextAuth/util/sessionUtil";
import { User } from "next-auth";
import FormItemsPresenter from "../_presenter/FormItemsPresenter";

/**
 * 課題追加ページのformに紐づく情報を取得
 * Form.tsxと資産を分ける理由は、FormItemsに紐づく資産をサーバーサイドでレンダリングするため
 * @returns FormItemsPresenter(view)にパラメータを渡して返す
 * ※Form.tsxに直接実装すると、
 *   このserver componentが、client component扱いされてしまい、
 *   ブラウザから各APIを発行することになり効率が悪い
 */
export const FormItems = async (): Promise<JSX.Element> => {
    const session = await getServerSession();

    // bffがあれば、フロントエンドはAPIを1本発行で済む
    // nextjsはapi routesが使えるため、app/api配下にapi用のエンドポイントを作成できる
    // これによって本プロジェクト内でbff層の実装まで可能だが、
    // bffとフロントエンドを同じプロジェクトに実装するのは微妙な気がする...
    const projects: GetProjectsResponse = await fetchProjects(session.user);
    const projectOptions = projectsToOptions(projects);

    const issueTypeIds = await fetchIssueTypeIds(session.user, projects);

    const prioritiesOptions = await fetchPriorities(session.user);

    return (
        <FormItemsPresenter
            projectOptions={projectOptions}
            issueTypeIdsOptions={issueTypeIds}
            prioritiesOptions={prioritiesOptions}
        />
    );
};
export default FormItems;

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
