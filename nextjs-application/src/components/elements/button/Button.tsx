import styles from "./Button.module.css";

/**
 * ボタンcomponentの引数
 */
export type ButtonProps = {
    children: React.ReactNode;
    /**
     * クリック時のイベント
     */
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

/**
 * ボタンcomponent
 */
export const Button: React.FC<ButtonProps> = ({ children, onClick }: ButtonProps): JSX.Element => {
    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick(event);
    };

    return (
        <button className={styles.button} onClick={handleSubmit}>
            {children}
        </button>
    );
};

export default Button;
