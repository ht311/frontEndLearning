import { NextAuthProvider } from "@components/common/session/Providers";
import Issues from "./_presenter/Issues";

const Page = () => {
    return (
        <NextAuthProvider>
            <Issues />
        </NextAuthProvider>
    );
};
export default Page;
