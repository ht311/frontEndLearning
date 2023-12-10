import { fetcher } from "@api/fetcher";
import { GetIssueRequest, GetIssueResponse } from "@api/type/backlog/getIssue";
import { GetIssueTypeIdsRequest, GetIssueTypeIdsResponse } from "@api/type/backlog/getIssueTypeIds";
import { GetPrioritiesRequest, GetPrioritiesResponse } from "@api/type/backlog/getPriorities";
import { GetStatusesRequest, GetStatusesResponse } from "@api/type/backlog/getStatuses";
import { Option } from "@components/elements/select/SelectForm";
import { getServerSession } from "@lib/nextAuth/util/sessionUtil";
import { Session, User } from "next-auth";
import DetailPresenter from "../_presenter/DetailPresenter";

type DetailProps = {
    id: string;
};

export const Detail: React.FC<DetailProps> = async ({ id }: DetailProps): Promise<JSX.Element> => {
    const session: Session = await getServerSession();
    const defaultValues = await fetchDetail(session.user, id);
    const items = await fetchItems(session.user, defaultValues.projectId);

    return <DetailPresenter items={items} defaultValues={defaultValues} id={id} />;
};
export default Detail;

const fetchDetail = async (user: User, id: string): Promise<GetIssueResponse> => {
    const req = new GetIssueRequest(user, id);
    const res = await fetcher<GetIssueResponse>(req);
    return res;
};

export type FormItemsPresenterProps = {
    /** project */
    statusesOptions: Option[];
    /** タスクのタイプ */
    issueTypeIdsOptions: Option[];
    /** 優先度 */
    prioritiesOptions: Option[];
};
const fetchItems = async (user: User, projectId: number): Promise<FormItemsPresenterProps> => {
    return {
        statusesOptions: await fetchStatuses(user, projectId),
        issueTypeIdsOptions: await fetchIssueTypeIds(user, projectId),
        prioritiesOptions: await fetchPriorities(user),
    };
};

/**
 * Backlogのプロジェクトの状態一覧の取得 APIを発行する
 */
const fetchStatuses = async (user: User, projectId: number): Promise<Option[]> => {
    const req: GetStatusesRequest = new GetStatusesRequest(user, projectId);
    const res = await fetcher<GetStatusesResponse>(req);
    return [...res.map((res) => ({ value: res.id, displayValue: res.name }))];
};

/**
 * Backlogの種別一覧の取得 APIを発行する
 */
const fetchIssueTypeIds = async (user: User, projectId: number): Promise<Option[]> => {
    const req: GetIssueTypeIdsRequest = new GetIssueTypeIdsRequest(user, projectId);
    const res = await fetcher<GetIssueTypeIdsResponse>(req);
    return [...res.map((res) => ({ value: res.id, displayValue: res.name }))];
};

/**
 * Backlogの優先度一覧の取得 APIを発行する
 */
const fetchPriorities = async (user: User): Promise<Option[]> => {
    const req: GetPrioritiesRequest = new GetPrioritiesRequest(user);
    const res: GetPrioritiesResponse = await fetcher<GetPrioritiesResponse>(req);
    return [...res.map((res) => ({ value: res.id, displayValue: res.name }))];
};
