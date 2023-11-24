import styles from "./sidemenu.module.css";

const Sidemenu = (): JSX.Element => {
    return (
        <nav className={styles.sidemenu}>
            <ul>
                <li>
                    <a href="#">
                        <i></i>
                        <span>Menu1</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i></i>
                        <span>Menu2</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i></i>
                        <span>Menu3</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i></i>
                        <span>Menu4</span>
                    </a>
                </li>
            </ul>

            <ul className="control">
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
