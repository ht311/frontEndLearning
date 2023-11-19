"use client";
import { NextPage } from "next";
import { Detail } from "./_components/detail";
import { useParams } from "next/navigation";

const Page: NextPage = () => {
    const params = useParams();
    let id;
    if (Array.isArray(params.id)) {
        id = params.id[0];
    } else {
        id = params.id;
    }
    return (
        <>
            <Detail id={id} />
        </>
    );
};
export default Page;
