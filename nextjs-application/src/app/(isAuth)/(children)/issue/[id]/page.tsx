import { NextPage } from "next";
import { Detail } from "./_components/detail";

type PageProps = { params: { id: string } };

// このidはディレクトリ[id]の値
// http://{domain}/issue/hogeの場合、idはhogeが入る
// 詳細は動的ルーティングで検索
const Page: NextPage<PageProps> = ({ params }: PageProps) => {
    return <Detail id={params.id} />;
};
export default Page;
