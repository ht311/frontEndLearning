"use client";
import Link from "next/link";
import { ChangeEvent, Suspense } from "react";
import { getFormattedDate } from "@util/dateUtils";
import Table from "@components/elements/table/Table";
import { Option } from "@components/elements/select/SelectForm";
import { GroupOption } from "@components/elements/select/SelectFroupForm";
import SearchItemsPresenter from "./SearchItemsPresenter";
import { Response as GetIssueResponse } from "@api/type/backlog/getIssueList";
import { ReadonlyURLSearchParams } from "next/navigation";

// 引数が多すぎる
type IssuesPresenterProps = {
    /** project */
    projectOptions: Option[];
    /** タスクのタイプ */
    issueTypeIdsOptions: GroupOption[];
    /** 優先度 */
    prioritiesOptions: Option[];
    /**
     * onChangeイベント
     * elementに依存させることで、onChange発火時にAPIを発行して、issuesを更新する
     */
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    /**
     * fetch中(API発行中)はfalse
     */
    isLoading: boolean;
    /**
     * isLoadingがtrueの場合、課題検索結果
     * falseの場合、undefined
     */
    issues: ({ projectName: string } & GetIssueResponse)[] | undefined;
    /** useSearchParams */
    params: ReadonlyURLSearchParams;
};

const IssuesPresenter = (props: IssuesPresenterProps): JSX.Element => {
    return (
        <>
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
                    onChange={props.onChange}
                    params={props.params}
                />
            </Suspense>
            <hr />
            {props.isLoading ? (
                <div>loading...</div>
            ) : (
                <>
                    {props.issues && (
                        <Table
                            head={["Project名", "タスク名", "担当者", "優先度", "状態", "期限"]}
                            body={props.issues.map((issue, index) => [
                                issue.projectName,
                                <Link
                                    href={`./updateIssue/${issue.issueKey}`}
                                    key={index}
                                    scroll={false}
                                >
                                    {issue.summary}
                                </Link>,
                                issue.assignee?.name || "未設定",
                                issue.priority?.name || "未設定",
                                issue.status.name,
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
