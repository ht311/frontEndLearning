import { memo } from "react";
import classes from "./Child1.module.scss"
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";

export const Child1 = memo((props) =>{
    console.log("Child1 レンダリング")

    const {onClickReset,num} = props
    console.log({num})
    return (
        <div className={classes.style}>
            <p>Child1</p>
            <button onClick={onClickReset}>リセット</button>
            <Child2 num={num}/>
            <Child3 />
        </div>
    )
})