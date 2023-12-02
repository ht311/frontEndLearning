import GroupSelect, { GroupOption } from "@components/elements/select/SelectFroupForm";
import Select, { Option } from "@components/elements/select/SelectForm";
import Submit from "@components/elements/submit/Submit";

type SearchItemsPresenterProps = {
    /** project */
    projectOptions: Option[];
    /** タスクのタイプ */
    issueTypeIdsOptions: GroupOption[];
    /** 優先度 */
    prioritiesOptions: Option[];
    // 期限
};

/**
 * SearchItemsのプレゼンター
 * MVCモデルのView相当
 */
export const SearchItemsPresenter = ({
    projectOptions,
    issueTypeIdsOptions,
    prioritiesOptions,
}: SearchItemsPresenterProps): JSX.Element => {
    return (
        <>
            <div>
                project:
                <Select options={projectOptions} selectName="projectId[]" />
            </div>
            <div>
                タスクのタイプ:
                <GroupSelect groupOptions={issueTypeIdsOptions} selectName="issueTypeId[]" />
            </div>
            <div>
                優先度:
                <Select options={prioritiesOptions} selectName="priorityId[]" />
            </div>
            <Submit value="課題を取得する" />
        </>
    );
};
export default SearchItemsPresenter;
