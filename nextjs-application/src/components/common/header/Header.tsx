import styles from "./Header.module.css";
import Link from "next/link";
import { getServerSession } from "@lib/nextAuth/util/sessionUtil";
import { Session } from "next-auth";
import { LogoutButton } from "@lib/nextAuth/logout/LogoutButton";
import Image from "next/image";

const Header = async (): Promise<JSX.Element> => {
    const session: Session = await getServerSession();
    const name = session.user.name || "";

    return (
        <header className={styles.header}>
            <Link href="/home" aria-label="ホームに戻る">
                <span title="ホームに戻る">
                    <Image src="/images/homebutton.png" alt={name} height={40} width={40} />
                </span>
            </Link>
            <nav>
                <ul className={styles.ul}>
                    <li className={styles.li}>{name}</li>
                    <li className={styles.li}>
                        <LogoutButton />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
