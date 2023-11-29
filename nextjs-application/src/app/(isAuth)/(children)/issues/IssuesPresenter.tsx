"use client";
import Button from "@components/elements/button/button";
import useFetchIssues from "./useFetchIssues";
import Table from "@components/elements/table/table";

export const IssuesPresenter: React.FC = (): JSX.Element => {
    const { fetchIssueList, isLoading, issues } = useFetchIssues();

    return (
        <>
            <Button onClick={fetchIssueList}>課題を取得する</Button>
            <hr></hr>
            {isLoading ? (
                <div>loading...</div>
            ) : (
                <>
                    {issues && (
                        <Table
                            head={["projectName", "summary", "期限"]}
                            body={issues.map((issue) => [
                                issue.projectName,
                                issue.summary,
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
