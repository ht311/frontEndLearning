import Link from "next/link";
import Head from "next/head";
import utilStyles from "@styles/utils.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
    const siteTitle = "Next.js Sample Website";

    return (
        <>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Selt Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{" "}
                    <Link href="https://nextjs.org/learn" target="_blank">
                        our Next.js tutorial
                    </Link>
                    .)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Login</h2>
                <div>
                    <Link href="../../login">Login</Link>
                </div>
            </section>
            <section className={utilStyles.headingMd}>
                <h2>Util</h2>
                <div>
                    <Link href="../todo">ToDoList</Link>
                </div>
                <div>
                    <Link href="../cat">猫ちゃんの画像を見る</Link>
                </div>
                <div>
                    <Link href="../activities">アクティビティ参照</Link>
                </div>
                <div>
                    <Link href="../addIssue">課題追加</Link>
                </div>
            </section>
        </>
    );
};

export default Home;
