

export type InputLabelProps = {
    value?:string|number
    onChange:(event:React.ChangeEvent<HTMLInputElement>) => void
    disabled?:boolean // 非表示にしたいときにtrue
}

export const InputLabel = ({value = '', onChange, disabled=false}:InputLabelProps):JSX.Element =>{
    return (
        <input
            disabled={disabled}
            onChange={onChange}
            value={value}>
        </input>
    )
}

export default InputLabel