import Detail from "./_container/Detail";

type PageProps = { params: Promise<{ id: string }> };

// 引数のparams.idについては下記。
// このページの場合、ルーティングがapp\issue\[id]のため、
// URLがhttp://{domain}/issue/hogeの場合、idはhogeが入る
// 詳細は動的ルーティングで検索
const Page = async ({ params }: PageProps) => {
    const { id } = await params;
    return <Detail id={id} />;
};
export default Page;
