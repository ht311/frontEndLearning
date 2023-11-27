import { NextPage } from "next";
import { ActivitiesPresenter } from "./ActivitiesPresenter";
import { NextAuthProvider } from "@components/common/session/providers";

const Activities: NextPage = () => {
    return (
        <NextAuthProvider>
            <ActivitiesPresenter />
        </NextAuthProvider>
    );
};
export default Activities;
