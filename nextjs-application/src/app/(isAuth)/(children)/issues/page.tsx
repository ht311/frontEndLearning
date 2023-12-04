import { NextPage } from "next";
import IssuesPresenter from "./IssuesPresenter";
import { NextAuthProvider } from "@components/common/session/Providers";
import SearchItems from "./SearchItems";

const Page: NextPage = () => {
    return (
        <NextAuthProvider>
            <IssuesPresenter>
                <SearchItems />
            </IssuesPresenter>
        </NextAuthProvider>
    );
};
export default Page;
