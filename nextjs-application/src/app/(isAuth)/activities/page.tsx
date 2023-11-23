import { NextPage } from "next";
import { Detail } from "./_components/detail";
import { NextAuthProvider } from "@components/common/session/providers";

const Activities: NextPage = () => {
    return (
        <NextAuthProvider>
            <Detail />
        </NextAuthProvider>
    );
};
export default Activities;
