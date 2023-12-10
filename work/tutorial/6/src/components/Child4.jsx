import { memo } from "react"
import classes from "./Child4.module.scss"

export const Child4 = memo(() =>{
    console.log("Child4 レンダリング")

    return (
        <div className={classes.style}>
            <p>Child4</p>
        </div>

    )
})