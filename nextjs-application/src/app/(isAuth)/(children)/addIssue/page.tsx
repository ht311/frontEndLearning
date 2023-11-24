import { NextPage } from "next";
import { Form } from "./_components/form";
import FormItems from "./_components/formItems";

import { NextAuthProvider } from "@components/common/session/providers";

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
