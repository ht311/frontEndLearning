import { NextPage } from "next";
import { Suspense } from "react";
import Modal from "@components/common/modal/Modal";
import { Detail } from "@app/(isAuth)/(children)/updateIssue/[id]/_container/Detail";
import Router from "next/router";

type PageProps = { params: { id: string } };

const Page: NextPage<PageProps> = ({ params }: PageProps) => {
    const pathname = Router.pathname;
    const shouldShowModal = pathname.includes("/updateIssue/");

    return (
        shouldShowModal && (
            <Modal>
                <Suspense fallback={<div>loading...</div>}>
                    <Detail id={params.id} />
                </Suspense>
            </Modal>
        )
    );
};
export default Page;
