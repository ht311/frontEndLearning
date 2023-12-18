"use client";
import useFetchActivities from "../_container/useFetchActivities";
import ActivitiesPresenter from "../_presenter/ActivitiesPresenter";

export const ActivitiesContainer: React.FC = (): JSX.Element => {
    const { fetchActivity, isLoading, activityResponse } = useFetchActivities();

    return (
        <ActivitiesPresenter
            fetchActivity={fetchActivity}
            isLoading={isLoading}
            activityResponse={activityResponse}
        />
    );
};
export default ActivitiesContainer;
