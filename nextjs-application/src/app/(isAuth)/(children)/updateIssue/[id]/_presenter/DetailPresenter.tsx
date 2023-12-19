"use client";
import { GetIssueResponse } from "@api/type/backlog/getIssue";
import InputTextForm from "@components/elements/input/InputTextForm";
import Submit from "@components/elements/submit/Submit";
import Select from "@components/elements/select/SelectForm";
import { Option } from "@components/elements/select/SelectForm";
import { useFormState } from "react-dom";
import UpdateIssueAction from "../_container/UpdateIssueAction";
import styles from "./DetailPresenter.module.css";

type FormItemsPresenterProps = {
    /** project */
    statusesOptions: Option[];
    /** タスクのタイプ */
    issueTypeIdsOptions: Option[];
    /** 優先度 */
    prioritiesOptions: Option[];
};

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
    // presenterパターンとしてどうかはともかく、formに依存するのは設計として問題ないように思える
    // 問題あれば、他と同じようにContainer経由でパラメータを渡す
    const [patchIssueResponse, formSubmit] = useFormState(UpdateIssueAction, undefined);

    return (
        <>
            <form action={formSubmit}>
                <input type="hidden" name="issueIdOrKey" value={id} />
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
            {patchIssueResponse && (
                <>
                    <hr className={styles.hr} />
                    {patchIssueResponse.issueKey ? (
                        <h3>課題が更新されました</h3>
                    ) : (
                        <h3>課題の更新に失敗しました</h3>
                    )}
                </>
            )}
        </>
    );
};
export default DetailPresenter;
