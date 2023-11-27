"use client";
import Button from "@components/elements/button/button";
import useFetchIssues from "./useFetchIssues";
import Table from "@components/elements/table/table";

export const IssuesPresenter: React.FC = (): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fetchIssueList, isLoading, issues } = useFetchIssues();

    return (
        <>
            <Button onClick={fetchIssueList}>課題を取得する</Button>
            {isLoading ? (
                <div>loading...</div>
            ) : (
                <>
                    <div>{issues && issues[0].priority.name}</div>
                    <Table
                        head={["hoge", "huga"]}
                        body={[
                            ["", "foo1", "bar1"],
                            ["", "foo2", "bar2"],
                        ]}
                    />
                </>
            )}
        </>
    );
};
export default IssuesPresenter;
