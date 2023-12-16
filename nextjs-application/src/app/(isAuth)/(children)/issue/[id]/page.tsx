import { NextPage } from "next";
import Detail from "./_container/Detail";

type PageProps = { params: { id: string } };

// 引数のparams.idについては下記。
// このページの場合、ルーティングがapp\issue\[id]のため、
// URLがhttp://{domain}/issue/hogeの場合、idはhogeが入る
// 詳細は動的ルーティングで検索
const Page: NextPage<PageProps> = ({ params }: PageProps) => {
    return <Detail id={params.id} />;
};
export default Page;
