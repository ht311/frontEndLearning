import { NextPage } from "next";
import { Suspense } from "react";
import Modal from "@components/common/modal/Modal";
import { Detail } from "@app/(isAuth)/(children)/updateIssue/[id]/_container/Detail";

type PageProps = { params: { id: string } };

const Page: NextPage<PageProps> = async ({ params }: PageProps) => {
    return (
        <Modal>
            <Suspense fallback={<div>loading...</div>}>
                <Detail id={params.id} />
            </Suspense>
        </Modal>
    );
};
export default Page;
