

export type InputTextProps = {
    inputName?:string
    value?:string|number 
    onChange:(event:React.ChangeEvent<HTMLInputElement>) => void 
    disabled?:boolean // 非表示にしたいときにtrue
}

export const InputText = ({inputName = '',value = '', onChange, disabled=false}:InputTextProps):JSX.Element =>{
    return (
        <input
            type="text"
            name={inputName}
            disabled={disabled}
            onChange={onChange}
            value={value}>
        </input>
    )
}

export default InputText