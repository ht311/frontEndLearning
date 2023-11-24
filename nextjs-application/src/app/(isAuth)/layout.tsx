import { ReactNode } from "react";
import Header from "@components/common/header/header";
import Sidemenu from "@components/common/sidemenu/sidemenu";
import styles from "./layout.module.css";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            <Sidemenu />
            <div className={styles.container}>{children}</div>
        </>
    );
};

export default Layout;
