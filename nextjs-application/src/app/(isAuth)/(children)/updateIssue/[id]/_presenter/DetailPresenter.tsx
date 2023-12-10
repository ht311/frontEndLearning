"use client";
import { GetIssueResponse } from "@api/type/backlog/getIssue";
import InputTextForm from "@components/elements/input/InputTextForm";
import Submit from "@components/elements/submit/Submit";
import Select from "@components/elements/select/SelectForm";
import { useFormState } from "react-dom";
import { FormItemsPresenterProps } from "../_container/Detail";
import UpdateIssueAction from "../_container/UpdateIssueAction";
import { defaultUpdateIssueAction } from "../_container/types";

type DetailProps = {
    items: FormItemsPresenterProps;
    defaultValues: GetIssueResponse;
    id: string;
};

const DetailPresenter: React.FC<DetailProps> = ({
    items,
    defaultValues,
    id,
}: DetailProps): JSX.Element => {
    const state = defaultUpdateIssueAction;
    state.issueIdOrKey = id;
    const [patchIssueResponse, formSubmit] = useFormState(UpdateIssueAction, state);

    return (
        <>
            <form action={formSubmit}>
                <div>
                    課題の件名：
                    <InputTextForm inputName={"summary"} defaultValue={defaultValues.summary} />
                </div>
                <div>
                    タスクのタイプ:
                    <Select
                        options={items.issueTypeIdsOptions}
                        selectName="issueTypeId"
                        selected={defaultValues.issueType.id}
                        required={true}
                    />
                </div>
                <div>
                    優先度:
                    <Select
                        options={items.prioritiesOptions}
                        selectName="priorityId"
                        selected={defaultValues.priority.id}
                    />
                </div>
                <div>
                    状態:
                    <Select
                        options={items.statusesOptions}
                        selectName="statusId"
                        selected={defaultValues.status.id}
                    />
                </div>
                <Submit value="更新" />
            </form>
            {patchIssueResponse && <div>{patchIssueResponse.id}</div>}
        </>
    );
};
export default DetailPresenter;
