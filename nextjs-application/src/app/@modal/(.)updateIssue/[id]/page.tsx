import Modal from "@components/common/modal/Modal";
import { NextPage } from "next";
import { Detail } from "./_components/Detail";

type PageProps = { params: { id: string } };

const Page: NextPage<PageProps> = async ({ params }: PageProps) => {
    return (
        <Modal>
            <Detail id={params.id} />
        </Modal>
    );
};
export default Page;
