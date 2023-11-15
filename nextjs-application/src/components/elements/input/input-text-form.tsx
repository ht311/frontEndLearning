

export type InputTextFormProps = {
    inputName?:string
    defaultValue?:string|number 
    disabled?:boolean // 非表示にしたいときにtrue
}

export const InputTextForm = ({inputName = '',defaultValue, disabled=false}:InputTextFormProps):JSX.Element =>{
    return (
        <input
            type="text"
            name={inputName}
            disabled={disabled}
            defaultValue={defaultValue}
            >
        </input>
    )
}
export default InputTextForm