import { NextPage } from "next";
import IssuesPresenter from "./IssuesPresenter";
import { NextAuthProvider } from "@components/common/session/Providers";
import SearchItems from "./SearchItems";
import { Suspense } from "react";

const Page: NextPage = () => {
    return (
        <NextAuthProvider>
            <Suspense>
                <IssuesPresenter>
                    <SearchItems />
                </IssuesPresenter>
            </Suspense>
        </NextAuthProvider>
    );
};
export default Page;
