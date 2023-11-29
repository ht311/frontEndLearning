import Link from "next/link";
import styles from "./sidemenu.module.css";
import Image from "next/image";

const Sidemenu = (): JSX.Element => {
    return (
        <nav className={styles.sidemenu}>
            <ul>
                <li>
                    <Link href="../addIssue">
                        <Image
                            src="/images/addIssueIcon.png"
                            alt={"課題を追加"}
                            height={35}
                            width={35}
                        />
                        <span>課題を追加</span>
                    </Link>
                </li>
                <li>
                    <Link href="../issues">
                        <Image
                            src="/images/issusIcon.png"
                            alt={"課題一覧"}
                            height={35}
                            width={35}
                        />
                        <span>課題一覧</span>
                    </Link>
                </li>
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
