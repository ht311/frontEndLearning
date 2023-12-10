import { memo, useState } from "react"

type FizzProps = {
    isFizz: boolean
}
//Fizzは通常の関数コンポーネント
// isFizzがtureならFizz、それ以外は何も表示しない
// isFizzの変化にかかわらず、親が再レンダリングされるとFizzも再レンダリングされる
const Fizz = (props: FizzProps): JSX.Element => {

    const { isFizz } = props
    console.log(`Fizz再レンダリング,isFizz=${isFizz}`)
    return <span>{isFizz ? 'fizz' : ''}</span>
}


type BuzzProps = {
    isBuzz: boolean
    onClick: () => void
}
const Buzz = memo<BuzzProps>((props: BuzzProps): JSX.Element => {
    const { isBuzz, onClick } = props
    console.log(`Buzz再レンダリング,isBuzz=${isBuzz}`)
    return (
        <span onClick={onClick}>{isBuzz ? 'Buzz' : ''}</span>
    )
})

const reducer = (currentCount: number) => {
    return currentCount + 1
}

const Parent = (): JSX.Element => {
    let n = 1
    //const [count, dispatch] = useReducer(reducer,n)
    const [count, setCount] = useState(n)
    const isFizz = count % 3 === 0
    const isBuzz = count % 5 === 0

    const onBuzzClick =()=>{
        console.log(`buzzがクリックされたよ ,isBuzz=${isBuzz}`)    }

    console.log(`parentが再レンダリング, count=${count}`)

    return (
        <div>
            <button onClick={() => setCount(reducer)}>+1</button>
            <p>{`現在のカウント：${count}`}</p>
            <p>
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
            </p>
        </div>

    )

}

export default Parent