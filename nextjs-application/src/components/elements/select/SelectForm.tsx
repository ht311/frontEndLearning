import { ChangeEvent } from "react";
import style from "./select.module.css";

export type SelectProps = {
    /**
     * セレクタのoptionタグ
     */
    options: Option[];
    selectName?: string;
    required?: boolean;
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    selected?: string | number;
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
    selectName: inputName = "",
    options,
    required = false,
    onChange,
    selected = "",
}: SelectProps): JSX.Element => {
    return (
        <label className={style.selectbox}>
            <select
                name={inputName}
                required={required}
                onChange={onChange}
                defaultValue={selected}
            >
                {/* 未選択 "" 固定は微妙かも */}
                <option value={""} />
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
        </label>
    );
};

export default Select;
