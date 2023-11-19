import style from "./input-text.module.css";

export type InputTextFormProps = {
    inputName?: string;
    defaultValue?: string | number;
    placeholder?: string;
    disabled?: boolean; // 非表示にしたいときにtrue
};

export const InputTextForm = ({
    inputName = "",
    defaultValue,
    placeholder,
    disabled = false,
}: InputTextFormProps): JSX.Element => {
    return (
        <input
            className={style.input_text}
            type="text"
            name={inputName}
            placeholder={placeholder}
            disabled={disabled}
            defaultValue={defaultValue}
        ></input>
    );
};
export default InputTextForm;
