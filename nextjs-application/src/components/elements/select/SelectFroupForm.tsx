import { ChangeEvent } from "react";
import style from "./select.module.css";

export type SelectGroupProps = {
    /**
     * セレクタのoptionタグ
     */
    groupOptions: GroupOption[];
    inputName?: string;
    required?: boolean;
    /**
     * 非表示にしたいときにtrue
     */
    disabled?: boolean;
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
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

export type GroupOption = {
    /**
     * optgroupのlabel
     */
    name: string;
    /**
     * optgroupのid
     */
    id: string;
    /**
     * 紐づくoption
     */
    options: Option[];
};

export const GroupOptionsInit: GroupOption[] = [
    {
        name: "",
        id: "",
        options: OptionsInit,
    },
];

export const GroupSelect = ({
    inputName = "",
    groupOptions,
    required = false,
    disabled = false,
    onChange,
}: SelectGroupProps): JSX.Element => {
    return (
        <div className={style.selectbox}>
            <select name={inputName} disabled={disabled} required={required} onChange={onChange}>
                {/* 未選択 "" 固定は微妙かも */}
                <option value={""} />
                {groupOptions?.map((groupOptions, index) => (
                    <optgroup key={index} label={groupOptions.name} id={groupOptions.id}>
                        {groupOptions.options.map((option, optionIndex) => (
                            <option key={optionIndex} value={option.value}>
                                {option.displayValue}
                            </option>
                        ))}
                    </optgroup>
                ))}
            </select>
        </div>
    );
};

export default GroupSelect;
