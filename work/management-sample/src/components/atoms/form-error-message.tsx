
type Args = {
    children: React.ReactNode,
    classes?: string[]
}

export const FormErrorMessage = (args: Args): JSX.Element => {
    const { children, classes = ['mt-1'] } = args
    const className = ['text-red-500', 'text-xs', ...classes].join(" ")

    return <p className={className}>{children}</p>
}

export default FormErrorMessage