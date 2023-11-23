import styles from "./footer.module.css";
import Link from "next/link";

const Footer = (): JSX.Element => {
    return (
        <div className={styles.backToHome}>
            <Link href="/">←Back To Home</Link>
        </div>
    );
};

export default Footer;
