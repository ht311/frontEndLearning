import classes from "./Child2.module.scss"

export const Child2 = ()=>{
    console.log("Child2 レンダリング")

    return (
        <div className={classes.style}>
            <p>Child2</p>
        </div>
    )
}