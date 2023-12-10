import { FC } from "react"
import type { User } from "../types/user"

export const Listitem: FC<User> = (props: User) => {
    const { id, name, age, parsonalColor , hobbies} = props
    return (
        <p style={{ color: parsonalColor }}>
            {id}:{name}({age}) {hobbies?.join("/")}
        </p>
    )
}

Listitem.defaultProps={
    parsonalColor:"grey"
}