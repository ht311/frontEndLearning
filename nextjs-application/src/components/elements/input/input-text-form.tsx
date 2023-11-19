import style from "./input-text.module.css";

export type InputTextFormProps = {
    inputName?: string;
    defaultValue?: string | number;
    placeholder?: string;
    disabled?: boolean; // 非表示にしたいときにtrue
    pattern?: string;
    errorMessage?: string;
};

export const InputTextForm = ({
    inputName = "",
    defaultValue,
    placeholder,
    disabled = false,
    pattern,
    errorMessage,
}: InputTextFormProps): JSX.Element => {
    return (
        <label>
            <input
                className={style.input_text}
                type="text"
                name={inputName}
                placeholder={placeholder}
                disabled={disabled}
                defaultValue={defaultValue}
                pattern={pattern}
            ></input>
            {errorMessage && <span className={style.error_message}>{errorMessage}</span>}
        </label>
    );
};
export default InputTextForm;
