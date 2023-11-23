/* eslint-disable @next/next/no-img-element */
import styles from "./header.module.css";
import utilStyles from "../../../../styles/utils.module.css";
import Link from "next/link";
import { getServerSession } from "@util/sessionUtil";
import { Session } from "next-auth";

const Header = async (): Promise<JSX.Element> => {
    const session: Session = await getServerSession();
    const name = session.user.name || "";

    return (
        <header className={styles.header}>
            <Link href="/">
                <img
                    src="/images/profileIcon.png"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                />
            </Link>
            <h2 className={utilStyles.headingMd}>{name}</h2>
        </header>
    );
};

export default Header;
