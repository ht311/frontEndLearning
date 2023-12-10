import style from "./InputText.module.css";

export type InputTextProps = {
    inputName?: string;
    value?: string | number;
    placeholder?: string;
    /**
     * inputのonChengeイベント
     */
    // eslint-disable-next-line no-unused-vars
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * 非表示にしたいときにtrue
     */
    disabled?: boolean;
    defaultValue?: string;
};

export const InputText = ({
    inputName = "",
    value = "",
    placeholder,
    onChange,
    disabled = false,
    defaultValue = "",
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
            defaultValue={defaultValue}
        ></input>
    );
};

export default InputText;
