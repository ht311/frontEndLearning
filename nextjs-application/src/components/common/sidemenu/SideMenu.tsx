import Link from "next/link";
import styles from "./SideMenu.module.css";
import Image from "next/image";

const Sidemenu = (): JSX.Element => {
    return (
        <nav className={styles.sidemenu}>
            <ul>
                <Link href="../addIssue" aria-label="課題を追加">
                    <li>
                        <Image
                            src="/images/addIssueIcon.png"
                            alt={"課題を追加"}
                            height={35}
                            width={35}
                        />
                        <span>課題を追加</span>
                    </li>
                </Link>
                <Link href="../findIssues" aria-label="課題一覧">
                    <li>
                        <Image
                            src="/images/issusIcon.png"
                            alt={"課題一覧"}
                            height={35}
                            width={35}
                        />
                        <span>課題一覧</span>
                    </li>
                </Link>
            </ul>
        </nav>
    );
};

export default Sidemenu;
