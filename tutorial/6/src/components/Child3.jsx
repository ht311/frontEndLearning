import classes from "./Child3.module.scss"

export const Child3 = ()=>{
    console.log("Child3 レンダリング")

    return (
        <div className={classes.style}>
            <p>Child3</p>
        </div>
    )
}