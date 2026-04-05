import { Suspense } from "react";
import Modal from "@components/common/modal/Modal";
import { Detail } from "@app/(isAuth)/(children)/updateIssue/[id]/_container/Detail";

type PageProps = { params: Promise<{ id: string }> };

const Page = async ({ params }: PageProps) => {
    const { id } = await params;
    return (
        <Modal>
            <Suspense fallback={<div>loading...</div>}>
                <Detail id={id} />
            </Suspense>
        </Modal>
    );
};
export default Page;
