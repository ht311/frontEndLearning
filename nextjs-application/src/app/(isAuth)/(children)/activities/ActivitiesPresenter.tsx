"use client";
import Button from "@components/elements/button/Button";
import useFetchActivities from "./useFetchActivities";

export const ActivitiesPresenter: React.FC = (): JSX.Element => {
    const { fetchActivity, isLoading, activityResponse } = useFetchActivities();

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
