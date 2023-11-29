import { NextPage } from "next";
import { NextAuthProvider } from "@components/common/session/Providers";
import Form from "./Form";
import FormItems from "./FormItems";

const Activities: NextPage = () => {
    return (
        <>
            <NextAuthProvider>
                <Form>
                    <FormItems />
                </Form>
            </NextAuthProvider>
        </>
    );
};
export default Activities;
