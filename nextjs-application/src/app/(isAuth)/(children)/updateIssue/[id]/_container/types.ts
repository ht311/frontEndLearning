import { PatchIssueResponse } from "@api/type/backlog/patchIssue";
import { Option } from "@components/elements/select/SelectForm";

export type UpdateIssueActionResponse = PatchIssueResponse & {
    errorMessage?: string;
    issueIdOrKey?: string;
};

export const defaultUpdateIssueAction: UpdateIssueActionResponse = {
    id: 0,
    name: "",
    issueIdOrKey: "",
};

export type FormItemsPresenterProps = {
    /** project */
    statusesOptions: Option[];
    /** タスクのタイプ */
    issueTypeIdsOptions: Option[];
    /** 優先度 */
    prioritiesOptions: Option[];
};
