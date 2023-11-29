import { NextPage } from "next";
import IssuesPresenter from "./IssuesPresenter";
import { NextAuthProvider } from "@components/common/session/providers";

const Page: NextPage = () => {
    return (
        <NextAuthProvider>
            <IssuesPresenter />
        </NextAuthProvider>
    );
};
export default Page;
