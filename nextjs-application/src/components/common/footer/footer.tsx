import styles from "./footer.module.css";
import Link from "next/link";

const Footer = (): JSX.Element => {
    return (
        <div className={styles.backToHome}>
            <Link href="/home" aria-label="ホームに戻る">
                ←Back To Home
            </Link>
        </div>
    );
};

export default Footer;
