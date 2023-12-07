import Link from "next/link";

export const Custom404 = (): JSX.Element => {
    return (
        <>
            <h1>404 - Page Not Found</h1>
            <div>これはカスタムされたエラーページです</div>
            <Link href="../home" aria-label="ホームに戻る">
                ホームに戻る
            </Link>
        </>
    );
};

export default Custom404;
