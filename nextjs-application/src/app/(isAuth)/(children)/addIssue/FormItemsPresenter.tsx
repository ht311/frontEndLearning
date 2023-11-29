import InputTextForm from "@components/elements/input/InputTextForm";
import GroupSelect, { GroupOption } from "@components/elements/select/SelectFroupForm";
import Select, { Option } from "@components/elements/select/SelectForm";
import Submit from "@components/elements/submit/Submit";

type FormItemsPresenterProps = {
    /** project */
    projectOptions: Option[];
    /** タスクのタイプ */
    issueTypeIdsOptions: GroupOption[];
    /** 優先度 */
    prioritiesOptions: Option[];
};

/**
 * FormItemsのプレゼンター
 * MVCモデルのView相当
 */
export const FormItemsPresenter = ({
    projectOptions,
    issueTypeIdsOptions,
    prioritiesOptions,
}: FormItemsPresenterProps): JSX.Element => {
    return (
        <>
            <div>
                project:
                <Select options={projectOptions} inputName="projectId" required={true} />
            </div>
            <div>
                タスクのタイプ:
                <GroupSelect
                    groupOptions={issueTypeIdsOptions}
                    inputName="issueTypeId"
                    required={true}
                />
            </div>
            <div>
                優先度:
                <Select options={prioritiesOptions} inputName="priorityId" required={true} />
            </div>
            <div>
                課題の件名:
                <InputTextForm
                    inputName="summary"
                    placeholder="任意の課題の件名を入力してください"
                    pattern=".{0,20}"
                    errorMessage="20文字以内で入力してください"
                />
            </div>
            <Submit value="追加" />
        </>
    );
};
export default FormItemsPresenter;
