import React, { useCallback, useState } from "react"

type ButtonProps = {
    onClick: () => void
}

//decrementButtonは通常の関数Componentでボタンを表示する
const DecrementButton = (props: ButtonProps): JSX.Element => {
    const { onClick } = props
    console.log('DecrementButtonが再レンダリングされた')

    return <button onClick={onClick}>Decrement</button>
}

// IncrementButtonはメモ化した関数Componentでボタンを表示する
const IncrementButton = React.memo((props: ButtonProps): JSX.Element => {
    const { onClick } = props
    console.log('IncrementButtonが再レンダリングされた')

    return <button onClick={onClick}>Increment</button>
})

// DoubleButtonは目も可した関数Componentでボタンを表示する
const DoubleButton = React.memo((props: ButtonProps): JSX.Element => {
    const { onClick } = props
    console.log('DoubleButtonが再レンダリングされた')

    return <button onClick={onClick}>DoubleButton</button>
})

export const Parent = (): JSX.Element => {
    const [count, setCount] = useState(0)
    const decrement = () => {
        setCount((c) => c - 1)
    }
    const increment = () => {
        setCount((c) => c + 1)
    }

    // usetCallBackを使って関数をメモ化する
    const double = useCallback(() => {
        setCount(c => c * 2) //第二引数が空なので、常に同じ関数を返す
    }, [])

    return (
        <div>
            <p>Count:{count}</p>
            <DecrementButton onClick={decrement} />
            <IncrementButton onClick={increment} />
            <DoubleButton onClick={double} />
        </div>
    )

}