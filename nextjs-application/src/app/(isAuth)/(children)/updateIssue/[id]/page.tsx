import { NextPage } from "next";
// import { Detail } from "./_components/Detail";

type PageProps = { params: { id: string } };

// 引数のparams.idについては下記。
// このページの場合、ルーティングがapp\issue\[id]のため、
// URLがhttp://{domain}/issue/hogeの場合、idはhogeが入る
// 詳細は動的ルーティングで検索
const Page: NextPage<PageProps> = async ({ params }: PageProps) => {
    console.log("それはそう");

    return <div>{params.id}</div>;
    // return <Detail id={params.id} />;
};
export default Page;
