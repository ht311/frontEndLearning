import { NextPage } from "next";

import { NextAuthProvider } from "@components/common/session/providers";
import Form from "./Form";
import FormItems from "./FormItems";

const Activities: NextPage = () => {
    return (
        <>
            <h3>課題の追加</h3>
            <NextAuthProvider>
                <Form>
                    <FormItems />
                </Form>
            </NextAuthProvider>
        </>
    );
};
export default Activities;
