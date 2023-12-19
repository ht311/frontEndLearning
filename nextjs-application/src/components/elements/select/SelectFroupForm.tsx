import { ChangeEvent } from "react";
import style from "./select.module.css";

export type SelectGroupProps = {
    /**
     * セレクタのoptionタグ
     */
    groupOptions: GroupOption[];
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
    selectName: inputName = "",
    groupOptions,
    required = false,
    onChange,
    selected = "",
}: SelectGroupProps): JSX.Element => {
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
        </label>
    );
};

export default GroupSelect;
