import Projects from "./_elements/projects";
import IssueTypeIds from "./_elements/issueTypeIds";
import { Priorities } from "./_elements/priorities";
import InputTextForm from "@components/elements/input/input-text-form";

/**
 * 課題追加ページのformに紐づく要素
 * form.tsxと資産を分ける理由は、FormItemsに紐づく資産をサーバーサイドでレンダリングするため
 * ※form.tsxに直接べた書きすると、servercomponentのProjectsなどがclientcomponent扱いされてしまう
 * @returns 概要の通り
 */
export const FormItems = (): JSX.Element => {
    return (
        <>
            <div>
                project: <Projects name="projectId"></Projects>
            </div>
            <div>
                タスクのタイプ: <IssueTypeIds name="issueTypeId" />
            </div>
            <div>
                優先度: <Priorities name="priorityId" />
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
        </>
    );
};
export default FormItems;
