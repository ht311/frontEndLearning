import styles from "./Button.module.css";

/**
 * ボタンcomponentの引数
 */
export type ButtonProps = {
    children: React.ReactNode;
    /**
     * クリック時のイベント
     */
    // eslint-disable-next-line no-unused-vars
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * 非表示にしたいときにtrue
     */
    disabled?: boolean;
};

/**
 * ボタンcomponent
 * @param ButtonProps
 * @returns CSS適用されたボタン
 */
export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    disabled = false,
}: ButtonProps): JSX.Element => {
    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;

        onClick(event);
    };

    return (
        <button className={styles.button} disabled={disabled} onClick={handleSubmit}>
            {children}
        </button>
    );
};

export default Button;
