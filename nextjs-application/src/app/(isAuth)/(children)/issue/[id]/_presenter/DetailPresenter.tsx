import Link from "next/link";

type DetailPresenterProps = {
    summary: string;
    id: string;
};

const DetailPresenter: React.FC<DetailPresenterProps> = async (
    props: DetailPresenterProps,
): Promise<JSX.Element> => {
    return (
        <>
            <div>課題名:{props.summary}</div>
            <Link href="../findIssues">課題一覧に移動する</Link>
        </>
    );
};
export default DetailPresenter;
