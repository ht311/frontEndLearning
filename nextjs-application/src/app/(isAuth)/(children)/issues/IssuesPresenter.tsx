"use client";
// import Button from "@components/elements/button/Button";
import useFetchIssues from "./useFetchIssues";
import Table from "@components/elements/table/Table";
import Link from "next/link";

const IssuesPresenter = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const { search, isLoading, issues } = useFetchIssues();

    return (
        <>
            <h3>課題一覧</h3>
            <form onSubmit={search}>{children}</form>
            {/* <input onChange={search}>{children}</input> */}
            {/* <Button onClick={fetchIssueList}>課題を取得する</Button> */}
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
                                <Link href={`./updateIssue/${issue.issueKey}`} key={index}>
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
