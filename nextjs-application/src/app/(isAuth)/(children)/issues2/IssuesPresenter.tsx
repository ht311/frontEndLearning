"use client";
import useFetchIssues from "./useFetchIssues";
import Table from "@components/elements/table/Table";
import { Option } from "@components/elements/select/SelectForm";
import { GroupOption } from "@components/elements/select/SelectFroupForm";
import SearchItemsPresenter from "./SearchItemsPresenter";
import Link from "next/link";
import { Suspense } from "react";

export type IssuesPresenterProps = {
    /** project */
    projectOptions: Option[];
    /** タスクのタイプ */
    issueTypeIdsOptions: GroupOption[];
    /** 優先度 */
    prioritiesOptions: Option[];
};
const IssuesPresenter = (props: IssuesPresenterProps): JSX.Element => {
    const { onChange, isLoading, issues } = useFetchIssues();

    return (
        <>
            <h3>課題一覧</h3>
            <Suspense fallback={<div>読み込み中</div>}>
                <SearchItemsPresenter
                    projectOptions={props.projectOptions}
                    issueTypeIdsOptions={props.issueTypeIdsOptions}
                    prioritiesOptions={props.prioritiesOptions}
                    onChange={onChange}
                ></SearchItemsPresenter>
            </Suspense>
            <hr></hr>
            {isLoading ? (
                <div>loading...</div>
            ) : (
                <>
                    {issues && (
                        <Table
                            head={["Project名", "タスク名", "期限"]}
                            body={issues.map((issue, index) => [
                                issue.projectName,
                                <Link href={`./issue/${issue.issueKey}`} key={index}>
                                    {issue.summary}
                                </Link>,
                                issue.dueDate?.toString() || "未設定",
                            ])}
                        />
                    )}
                </>
            )}
        </>
    );
};
export default IssuesPresenter;
