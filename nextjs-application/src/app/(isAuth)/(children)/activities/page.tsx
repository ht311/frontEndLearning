import { NextPage } from "next";
import { ActivitiesContainer } from "./_container/ActivitiesContainer";
import { NextAuthProvider } from "@lib/nextAuth/session/Providers";

const Activities: NextPage = () => {
    return (
        <NextAuthProvider>
            <ActivitiesContainer />
        </NextAuthProvider>
    );
};
export default Activities;
