import { useMemo, useState } from "react"

export const UseMemoSample = (): JSX.Element => {
    // textは現在のテキストボックスの値を保持
    const [text, setText] = useState(``)
    // itemsは文字列のリストを保持
    const [items, setItems] = useState<String[]>([])

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onClickButton = () => {
        setItems((prevItems) => {
            // 現在の入力値をitemsに追加する。また新しい配列を作成して保存する
            // スプレッド構文
            return [...prevItems, text]
        })
        // テキストボックスを空に
        setText(``)
    }

    // numberOfCharacters1 は再レンダリングの度にitems.reduceを実行する
    const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0)
    // numberOfCharacters2 はustMemoを使い、itemsが更新されるタイミングでitems.reduceを実行する
    const numberOfCharacters2 = useMemo(() => {
        // 第二引数の配列にitemsがあるため、itemsが更新されると関数を実行してメモも更新する
        return items.reduce((sub, item) => sub + item.length, 0)
    }, [items])

    return (
        <div>
            <p>UseMemoSample</p>
            <div>
                <input value={text} onChange={onChangeInput} />
                <button onClick={onClickButton}>add</button>
            </div>
            <div>
                {items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div>
                <p>Total Number of Character 1: {numberOfCharacters1}</p>
                <p>Total Number of Character 2: {numberOfCharacters2}</p>
            </div>
        </div>
    )
}