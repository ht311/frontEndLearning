import { useRouter } from "next/router"

type Args = {
    children: React.ReactNode
    label: string
    link: string
    active?: boolean
    toggle: () => void
}

export const NaviItem = ({ children, label, link, active = false, toggle }: Args): JSX.Element => {
    const routor = useRouter()
    const handleClick = async (): Promise<void> => {
        await routor.push(link)
        toggle()
    }

    return (
        <a
            href="#"
            onClick={handleClick}
            className={`flex items-center mt-4 py-2 px-6 ${active
                    ? 'bg-gray-700 bg-opacity-25 text-gray-100'
                    : 'text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100'
                }`}
        >
            {children}
            <span className="mx-3">{label}</span>
        </a>
    )
}

export default NaviItem