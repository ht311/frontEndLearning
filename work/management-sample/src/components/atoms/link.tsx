import Link from 'next/link'

type Args = {
    children: React.ReactNode
    href?: string
    onClick?: (event: any) => void
}

export const Linkcomponent = ({
    children,
    href = '#',
    onClick,
}:Args): JSX.Element => {
    const handleClick = (event: any) => {
        if (onClick) {
            onClick(event)
        }
    }

    return (
        <Link
            className="block text-sm fontme text-indigo-700 hover:underline"
            href={href}
            onClick={handleClick}>
            {children}
        </Link>
    )
}

export default Linkcomponent