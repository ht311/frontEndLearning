import { useReducer } from "react"

type Action = 'DECREMENT' // +1
    | 'INCREMENT' // -1
    | 'DOUBLE' // *2
    | 'RESET' // 0

// 現在の状態とactionのよって、次の状態を返す
const reducer = (currentCount: number, action: Action): number => {
    switch (action) {
        case 'DECREMENT':
            return --currentCount
        case 'INCREMENT':
            return ++currentCount
        case 'DOUBLE':
            return currentCount * 2
        case 'RESET':
            return 0
    }
}


type CounterProps = {
    initialValue: number
}

// initialValue:カウンターの初期値
const Counter = (props: CounterProps): JSX.Element => {
    const { initialValue } = props
    // カウントの状態をuserStateで紐づける
    // userStateの引数は初期値なので、この関数の初期値を設定して振る舞いを担保する
    // const [count, setCount] = useState(initialValue)
    const [count, dispatch] = useReducer(reducer, initialValue)

    return (
        <div>
            <p>Count:{count}</p>
            {/* setCounstをcallして状態を更新 */}
            {/* <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount((n: number): number => n + 1)}>+</button> */}
            <button onClick={() => dispatch('DECREMENT')}>-</button>
            <button onClick={() => dispatch('INCREMENT')}>+</button>
            <button onClick={() => dispatch('DOUBLE')}>*2</button>
            <button onClick={() => dispatch('RESET')}>0</button>
        </div>
    )
}

export default Counter