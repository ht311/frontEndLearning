import { NextAuthProvider } from "@lib/nextAuth/session/Providers";
import Issues from "./_presenter/Issues";

const Page = () => {
    return (
        <NextAuthProvider>
            <Issues />
        </NextAuthProvider>
    );
};
export default Page;
