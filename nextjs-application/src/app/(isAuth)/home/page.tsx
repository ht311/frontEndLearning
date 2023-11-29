import Link from "next/link";
import utilStyles from "@styles/utils.module.css";
import { NextPage } from "next";
import LinkBlank from "@components/elements/link/LinkBlank";

const Home: NextPage = () => {
    return (
        <>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h3>概要</h3>
                このサイトはNext.js(v13) × TypeScriptで作成されています。
                <br />
                <li>
                    <LinkBlank href="https://github.com/ht311/react/tree/master">Github</LinkBlank>
                </li>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <hr />
                <h3>Backlog</h3>
                <li>
                    <Link href="../activities">最近の更新を見る</Link>
                </li>
                <li>
                    <Link href="../addIssue">課題を追加する</Link>
                </li>
                <li>
                    <Link href="../issues">課題の一覧を見る</Link>
                </li>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <hr />
                <h3>その他</h3>
                <li>
                    <Link href="../todo">ToDoListを使ってみる</Link>
                </li>
                <li>
                    <Link href="../cat">猫ちゃんの画像を見る</Link>
                </li>
            </section>
        </>
    );
};

export default Home;
