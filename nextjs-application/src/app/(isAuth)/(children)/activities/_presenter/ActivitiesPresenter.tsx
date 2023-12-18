"use client";
import Button from "@components/elements/button/Button";
import { Activity } from "@api/type/backlog/getActivities";

type ActivitiesPresenterProps = {
    /**
     * 再fetchしたい場合に呼ぶ
     */
    fetchActivity: () => void;
    /**
     * fetch中はfalse
     */
    isLoading: boolean;
    /**
     * isLoadingがtrueの場合、応答値
     * falseの場合、undefined
     */
    activityResponse: CustomActivityResponse[] | undefined;
};

type CustomActivityResponse = { name: string } & Activity;

export const ActivitiesPresenter = ({
    fetchActivity,
    isLoading,
    activityResponse,
}: ActivitiesPresenterProps): JSX.Element => {
    return (
        <>
            <Button onClick={fetchActivity}>activityを更新する</Button>
            {isLoading ? (
                <div>loading...</div>
            ) : (
                <ul>
                    {activityResponse?.map((res) => (
                        <li key={res.id}>
                            <div>{res.name}</div>
                            {res.content.name && <div>Name:{res.content.name}</div>}
                            {res.content.summary && <div>タスク名:{res.content.summary}</div>}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};
export default ActivitiesPresenter;
