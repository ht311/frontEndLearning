import { NextPage } from "next";
import { NextAuthProvider } from "@components/common/session/Providers";
import Form from "./_presenter/Form";
import FormItems from "./_container/FormItems";

const Activities: NextPage = () => {
    return (
        <NextAuthProvider>
            <Form>
                <FormItems />
            </Form>
        </NextAuthProvider>
    );
};
export default Activities;
