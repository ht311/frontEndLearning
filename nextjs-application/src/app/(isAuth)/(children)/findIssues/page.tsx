import { NextAuthProvider } from "@lib/nextAuth/session/Providers";
import IssuesServer from "./_container/IssuesServer";

const Page = () => {
    return (
        <NextAuthProvider>
            <IssuesServer />
        </NextAuthProvider>
    );
};
export default Page;
