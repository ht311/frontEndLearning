/* eslint-disable @next/next/no-img-element */
import styles from "./header.module.css";
import Link from "next/link";
import { getServerSession } from "@util/sessionUtil";
import { Session } from "next-auth";
import { LogoutButton } from "@components/common/logout/logout-button";
import Image from "next/image";

const Header = async (): Promise<JSX.Element> => {
    const session: Session = await getServerSession();
    const name = session.user.name || "";

    return (
        <header className={styles.header}>
            <Link href="/">
                <Image src="/images/homebutton.png" alt={name} height={40} width={40} />
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
