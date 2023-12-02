import { NextPage } from "next";
// import IssuesPresenter from "./IssuesPresenter";
import { NextAuthProvider } from "@components/common/session/Providers";
import Issues from "./Issues";

const Page: NextPage = () => {
    return (
        <NextAuthProvider>
            <Issues />
        </NextAuthProvider>
    );
};
export default Page;
