import { ReactNode } from "react";
import styles from "./layout.module.css";

const App = ({ children }: { children: ReactNode }) => {
    return <div className={styles.container}>{children}</div>;
};

export default App;

export const metadata = {
    title: "Login",
    description: "description",
};
