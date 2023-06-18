import { memo } from "react"
import classes from "./Child2.module.scss"

export const Child2 = memo((props)=>{
    console.log("Child2 レンダリング")

    const {num} = props

    return (
        <div className={classes.style}>
            <p>Child2</p>
            <p>{num}</p>
        </div>
    )
})