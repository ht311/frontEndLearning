import Link from "next/link";
import utilStyles from "@styles/utils.module.css";
import LinkBlank from "@components/elements/link/LinkBlank";

const HomePresenter = (): JSX.Element => {
    return (
        <>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h3>概要</h3>
                このサイトはNext.js(v13) × TypeScriptで作成されています。
                <br />
                <li>
                    <LinkBlank href="https://github.com/ht311/react/tree/master" ariaLabel="Github">
                        Github
                    </LinkBlank>
                </li>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <hr />
                <h3>Backlog</h3>
                <li>
                    <Link href="../activities" aria-label="最近の更新を見る">
                        最近の更新を見る
                    </Link>
                </li>
                <li>
                    <Link href="../addIssue" aria-label="課題を追加する">
                        課題を追加する
                    </Link>
                </li>
                <li>
                    <Link href="../findIssues" aria-label="課題の一覧を見る">
                        課題の一覧を見る
                    </Link>
                </li>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <hr />
                <h3>その他</h3>
                <li>
                    <Link href="../todo" aria-label="ToDoListを使ってみる">
                        ToDoListを使ってみる
                    </Link>
                </li>
                <li>
                    <Link href="../cat" aria-label="猫ちゃんの画像を見る">
                        猫ちゃんの画像を見る
                    </Link>
                </li>
            </section>
        </>
    );
};

export default HomePresenter;
