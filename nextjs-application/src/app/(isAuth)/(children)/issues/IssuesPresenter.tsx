"use client";
import Button from "@components/elements/button/Button";
import useFetchIssues from "./useFetchIssues";
import Table from "@components/elements/table/Table";
import Link from "next/link";

export const IssuesPresenter: React.FC = (): JSX.Element => {
    const { fetchIssueList, isLoading, issues } = useFetchIssues();

    return (
        <>
            <h3>課題一覧</h3>
            <Button onClick={fetchIssueList}>課題を取得する</Button>
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
