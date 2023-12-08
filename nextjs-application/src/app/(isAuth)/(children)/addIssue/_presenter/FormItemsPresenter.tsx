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
const FormItemsPresenter = ({
    projectOptions,
    issueTypeIdsOptions,
    prioritiesOptions,
}: FormItemsPresenterProps): JSX.Element => {
    return (
        <>
            <div>
                project:
                <Select options={projectOptions} selectName="projectId" required={true} />
            </div>
            <div>
                課題の件名:
                <InputTextForm
                    inputName="summary"
                    placeholder="課題の件名を入力してください"
                    pattern=".{0,20}"
                    errorMessage="20文字以内で入力してください"
                />
            </div>
            <div>
                タスクのタイプ:
                <GroupSelect
                    groupOptions={issueTypeIdsOptions}
                    selectName="issueTypeId"
                    required={true}
                />
            </div>
            <div>
                優先度:
                <Select options={prioritiesOptions} selectName="priorityId" required={true} />
            </div>
            <Submit value="追加" />
        </>
    );
};
export default FormItemsPresenter;
