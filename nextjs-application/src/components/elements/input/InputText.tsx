import style from "./InputText.module.css";

export type InputTextProps = {
    inputName?: string;
    value?: string | number;
    placeholder?: string;
    /**
     * inputのonChengeイベント
     */

    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputText = ({
    inputName = "",
    value = "",
    placeholder,
    onChange,
}: InputTextProps): React.JSX.Element => {
    return (
        <input
            className={style.input_text}
            type="text"
            name={inputName}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        ></input>
    );
};

export default InputText;
