import Link from "next/link";
import styles from "./sidemenu.module.css";
import Image from "next/image";

const Sidemenu = (): JSX.Element => {
    return (
        <nav className={styles.sidemenu}>
            <ul>
                <Link href="../addIssue">
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
                <Link href="../issues">
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

            <ul className={styles.control}>
                <li>
                    <a href="#">
                        <i></i>
                        <span>Menu</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Sidemenu;
