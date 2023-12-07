import { NextPage } from "next";
import { ActivitiesPresenter } from "./_presenter/ActivitiesPresenter";
import { NextAuthProvider } from "@components/common/session/Providers";

const Activities: NextPage = () => {
    return (
        <NextAuthProvider>
            <ActivitiesPresenter />
        </NextAuthProvider>
    );
};
export default Activities;
