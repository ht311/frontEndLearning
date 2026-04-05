import { ActivitiesContainer } from "./_container/ActivitiesContainer";
import { NextAuthProvider } from "@lib/nextAuth/session/Providers";

const Activities = () => {
    return (
        <NextAuthProvider>
            <ActivitiesContainer />
        </NextAuthProvider>
    );
};
export default Activities;
