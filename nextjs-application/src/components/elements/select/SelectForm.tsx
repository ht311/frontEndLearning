import style from "./select.module.css";

export type SelectProps = {
    /**
     * セレクタのoptionタグ
     */
    options: Option[];
    inputName?: string;
    required?: boolean;
    /**
     * 非表示にしたいときにtrue
     */
    disabled?: boolean;
};

export type Option = {
    /**
     * optionのvalue属性
     */
    value: string | number;
    /**
     * optionに表示する値
     */
    displayValue: string | number;
};

export const OptionsInit: Option[] = [
    {
        value: "",
        displayValue: "",
    },
];

export const Select = ({
    inputName = "",
    options,
    required = false,
    disabled = false,
}: SelectProps): JSX.Element => {
    return (
        <div className={style.selectbox}>
            <select name={inputName} disabled={disabled} required={required}>
                {/* 未選択 "" 固定は微妙かも */}
                <option value={""} />
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
