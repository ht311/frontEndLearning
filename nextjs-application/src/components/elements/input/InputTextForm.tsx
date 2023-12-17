import style from "./InputText.module.css";

export type InputTextFormProps = {
    inputName: string;
    defaultValue?: string | number;
    placeholder?: string;
    required?: boolean;
    /** 正規表現で指定 */
    pattern?: string;
    /** requiredまたはpatternでNGの場合に活性 */
    errorMessage?: string;
};

export const InputTextForm = ({
    inputName,
    defaultValue,
    placeholder,
    required = false,
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
                defaultValue={defaultValue}
                pattern={pattern}
                required={required}
            ></input>
            {errorMessage && <span className={style.error_message}>{errorMessage}</span>}
        </label>
    );
};
export default InputTextForm;
