import style from "./input-text.module.css";

export type InputTextProps = {
    inputName?: string;
    value?: string | number;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean; // 非表示にしたいときにtrue
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
