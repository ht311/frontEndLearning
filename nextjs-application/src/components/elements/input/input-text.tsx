import style from "./input-text.module.css";

export type InputTextProps = {
    inputName?: string;
    value?: string | number;
    placeholder?: string;
    /**
     * inputのonChengeイベント
     */
    // eslint-disable-next-line no-unused-vars
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * 非表示にしたいときにtrue
     */
    disabled?: boolean;
};

export const InputText = ({
    inputName = "",
    value = "",
    placeholder,
    onChange,
    disabled = false,
}: InputTextProps): JSX.Element => {
    return (
        <input
            className={style.input_text}
            type="text"
            name={inputName}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
            value={value}
        ></input>
    );
};

export default InputText;
