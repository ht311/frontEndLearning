"use client";
import { Option } from "@components/elements/select/SelectForm";
import { GroupOption } from "@components/elements/select/SelectFroupForm";
import useFetchIssues from "../_container/useFetchIssues";
import IssuesPresenter from "../_presenter/IssuesPresenter";
import { useSearchParams } from "next/navigation";

export type IssuesClientProps = {
    /** project */
    projectOptions: Option[];
    /** タスクのタイプ */
    issueTypeIdsOptions: GroupOption[];
    /** 優先度 */
    prioritiesOptions: Option[];
};
const IssuesClient = (props: IssuesClientProps): JSX.Element => {
    const { onChange, isLoading, issues } = useFetchIssues();
    const params = useSearchParams();

    return (
        <IssuesPresenter
            onChange={onChange}
            isLoading={isLoading}
            issues={issues}
            projectOptions={props.projectOptions}
            issueTypeIdsOptions={props.issueTypeIdsOptions}
            prioritiesOptions={props.prioritiesOptions}
            params={params}
        />
    );
};
export default IssuesClient;
