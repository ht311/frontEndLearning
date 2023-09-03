
const Hello = () => {
    const onClick = () =>{
        alert(`Hello!`);
    }
    const text:string = 'Hello, React'

    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
}

export default Hello