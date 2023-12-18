import styles from "./Header.module.css";
import Link from "next/link";
import { LogoutButton } from "@lib/nextAuth/logout/LogoutButton";
import Image from "next/image";

type HeaderPresenterProps = {
    userName: string;
};

const HeaderPresenter = ({ userName }: HeaderPresenterProps): JSX.Element => {
    return (
        <header className={styles.header}>
            <Link href="/home" aria-label="ホームに戻る">
                <span title="ホームに戻る">
                    <Image src="/images/homebutton.png" alt={userName} height={40} width={40} />
                </span>
            </Link>
            <nav>
                <ul className={styles.ul}>
                    <li className={styles.li}>{userName}</li>
                    <li className={styles.li}>
                        <LogoutButton />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderPresenter;
