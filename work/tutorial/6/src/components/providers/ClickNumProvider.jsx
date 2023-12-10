import { useState } from "react";
import { createContext } from "react";

export const ClickNumContext = createContext({})

export const ClickNumProvider = (props) => {
    const { children } = props

    const [ num, setNum ] = useState(0)


    return (
        <ClickNumContext.Provider value={{ num, setNum }}>
            {children}
        </ClickNumContext.Provider>
    )
}