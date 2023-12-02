"use client";
import GroupSelect, { GroupOption } from "@components/elements/select/SelectFroupForm";
import Select, { Option } from "@components/elements/select/SelectForm";
import { ChangeEvent } from "react";

export type SearchItemsPresenterProps = {
    /** project */
    projectOptions: Option[];
    /** タスクのタイプ */
    issueTypeIdsOptions: GroupOption[];
    /** 優先度 */
    prioritiesOptions: Option[];
    // 各セレクタのonChangeイベント
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

/**
 * SearchItemsのプレゼンター
 * MVCモデルのView相当
 */
export const SearchItemsPresenter = ({
    projectOptions,
    issueTypeIdsOptions,
    prioritiesOptions,
    onChange,
}: SearchItemsPresenterProps): JSX.Element => {
    return (
        <>
            <div>
                project:
                <Select options={projectOptions} inputName="projectId[]" onChange={onChange} />
            </div>
            <div>
                タスクのタイプ:
                <GroupSelect
                    groupOptions={issueTypeIdsOptions}
                    inputName="issueTypeId[]"
                    onChange={onChange}
                />
            </div>
            <div>
                優先度:
                <Select options={prioritiesOptions} inputName="priorityId[]" onChange={onChange} />
            </div>
        </>
    );
};
export default SearchItemsPresenter;
