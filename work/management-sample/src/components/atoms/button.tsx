"use client";
import _ from "lodash"

type Map = {
    key: string
    class: string[]
}

const ColorSetting: Map[] = [
    {
        key: "primary",
        class: [
            "text-white",
            "bg-indigo-600",
            "hover:bg-indigo-700",
            "focus:ring-indigo-500",
            "border-transparent",
            "primary-button"
        ],
    },
    {
        key: 'default',
        class: [
            'text-gray-700',
            'bg-white',
            'hover:bg-gray-100',
            'focus:ring-indigo-500',
            'border-gray-300',
            'default-button',
        ],
    },
    {
        key: 'danger',
        class: [
            'text-white',
            'bg-red-600',
            'hover:bg-red-700',
            'focus:ring-red-500',
            'border-transparent',
            'danger-button',
        ],
    },
]


const SizeSetting: Map[] = [
    {
        key: "small",
        class: [
            "py-2",
            "py-4"
            , "text-sm"
        ],
    }
]

export const Button = ({
    children,
    color = 'default',
    size = "small",
    fullWidth = false,
    disabled = false,
    classes = [],
    onclick,
}: {
    children: React.ReactNode,
    color?: "default" | "primary" | "secondary" | "denger"
    size?: "large" | "medium" | "small",
    fullWidth?: boolean,
    disabled?: boolean,
    classes?: string[],
    onclick?: (event: any) => void
}): JSX.Element => {

    let _color = _.head(
        ColorSetting
            .filter((map: Map) => map.key === color)
            .map((map: Map) => map.class)
    )
    if (!_color) _color = []

    let _size = _.head(
        SizeSetting
            .filter((map: Map) => map.key === size)
            .map((map: Map) => map.class)
    )
    if (!_size) _size = []

    const className: string = [
        'inline-flex',
        'justify-center',
        'rounded-md',
        'border',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-offset-2',
        ..._color,
        ..._size,
        ...classes,
    ].join(' ')

    const handleSubmit = (event: any) => {
        if (disabled) return

        if (onclick) {
            onclick(event)
        }
    }

    return (
        <button
            className={
                `${className}
                ${fullWidth?'w-full':''}
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`
            }
            onClick={handleSubmit}
        >
            {children}
        </button>
    )
}

export default Button