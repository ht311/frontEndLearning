import classes from "./Child1.module.scss"
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";

export const Child1 = () =>{
    console.log("Child1 レンダリング")

    return (
        <div className={classes.style}>
            <p>Child1</p>
            <Child2 />
            <Child3 />
        </div>
    )
}