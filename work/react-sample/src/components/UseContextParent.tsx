import React, { useContext } from "react"

type User = {
    id: number,
    name: string
}

// ユーザーデータを保持するcontext
const UserContext = React.createContext<User | null>(null)

const GrandChild = (): JSX.Element | null => {
    const user: User | null = useContext(UserContext)
    if (!user) return null


    return <p>Hello,{user.name}</p>
}

const Child = (): JSX.Element => {
    const now: Date = new Date()

    return (
        <div>
            <p>{now.toLocaleDateString()}</p>
            <GrandChild />
        </div>
    )
}

export const UseContextParent = (): JSX.Element => {
    const user: User = {
        id: 1,
        name: 'Alice'
    }

    return (
        <UserContext.Provider value={user}>
            <Child/>
        </UserContext.Provider>
    )
}