"use client";
import Table from "@components/elements/table/Table";
import { Option } from "@components/elements/select/SelectForm";
import { GroupOption } from "@components/elements/select/SelectFroupForm";
import useFetchIssues from "../_container/useFetchIssues";
import SearchItemsPresenter from "./SearchItemsPresenter";
import Link from "next/link";
import { Suspense } from "react";
import { getFormattedDate } from "@util/dateUtils";

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
            <Suspense
                fallback={
                    <>
                        <div>
                            project:
                            <select />
                        </div>
                        <div>
                            タスクのタイプ:
                            <select />
                        </div>
                        <div>
                            優先度:
                            <select />
                        </div>
                        <hr />
                    </>
                }
            >
                <SearchItemsPresenter
                    projectOptions={props.projectOptions}
                    issueTypeIdsOptions={props.issueTypeIdsOptions}
                    prioritiesOptions={props.prioritiesOptions}
                    onChange={onChange}
                />
            </Suspense>
            <hr />
            {isLoading ? (
                <div>loading...</div>
            ) : (
                <>
                    {issues && (
                        <Table
                            head={["Project名", "タスク名", "期限"]}
                            body={issues.map((issue, index) => [
                                issue.projectName,
                                <Link
                                    href={`./updateIssue/${issue.issueKey}`}
                                    key={index}
                                    scroll={false}
                                >
                                    {issue.summary}
                                </Link>,
                                getFormattedDate(issue.dueDate, "未設定"),
                            ])}
                        />
                    )}
                </>
            )}
        </>
    );
};
export default IssuesPresenter;
