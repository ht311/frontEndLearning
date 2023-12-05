import styles from "./Header.module.css";
import Link from "next/link";
import { getServerSession } from "@util/sessionUtil";
import { Session } from "next-auth";
import { LogoutButton } from "@components/common/logout/LogoutButton";
import Image from "next/image";

const Header = async (): Promise<JSX.Element> => {
    const session: Session = await getServerSession();
    const name = session.user.name || "";

    return (
        <header className={styles.header}>
            <Link href="/home">
                <span title="ホームに戻る">
                    <Image src="/images/homebutton.png" alt={name} height={40} width={40} />
                </span>
            </Link>
            <nav>
                <ul>
                    <li>{name}</li>
                    <li>
                        <LogoutButton />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
