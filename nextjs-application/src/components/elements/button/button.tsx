import styles from "./button.module.css";

/**
 * ボタンcomponentの引数
 */
export type ButtonProps = {
    children: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean; // 非表示にしたいときにtrue
};

/**
 * ボタンcomponent
 * @param ButtonProps
 * @returns いい感じにCSS適用されたボタン
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
