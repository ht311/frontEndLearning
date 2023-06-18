import { memo, useContext } from "react"
import classes from "./Child2.module.scss"
import { ClickNumContext } from "./providers/ClickNumProvider"

export const Child2 = memo(()=>{
    console.log("Child2 レンダリング")

    const {num} = useContext(ClickNumContext)

    return (
        <div className={classes.style}>
            <p>Child2</p>
            <p>{num}</p>
        </div>
    )
})