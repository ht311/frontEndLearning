"use client";
import GroupSelect, { GroupOption } from "@components/elements/select/SelectFroupForm";
import Select, { Option } from "@components/elements/select/SelectForm";
import { ChangeEvent } from "react";
import { ReadonlyURLSearchParams } from "next/navigation";

export type SearchItemsPresenterProps = {
    /** project */
    projectOptions: Option[];
    /** タスクのタイプ */
    issueTypeIdsOptions: GroupOption[];
    /** 優先度 */
    prioritiesOptions: Option[];
    /** 各セレクタのonChangeイベント */
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    /** useSearchParams */
    params: ReadonlyURLSearchParams;
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
    params,
}: SearchItemsPresenterProps): JSX.Element => {
    return (
        <>
            <div>
                project:
                <Select
                    options={projectOptions}
                    selectName="projectId[]"
                    onChange={onChange}
                    selected={params.get("projectId[]") || ""}
                />
            </div>
            <div>
                タスクのタイプ:
                <GroupSelect
                    groupOptions={issueTypeIdsOptions}
                    selectName="issueTypeId[]"
                    onChange={onChange}
                    selected={params.get("issueTypeId[]") || ""}
                />
            </div>
            <div>
                優先度:
                <Select
                    options={prioritiesOptions}
                    selectName="priorityId[]"
                    onChange={onChange}
                    selected={params.get("priorityId[]") || ""}
                />
            </div>
        </>
    );
};
export default SearchItemsPresenter;
