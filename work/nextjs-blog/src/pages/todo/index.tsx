import { NextPage } from "next";
import InputLabel from "../../../components/atom/input-label";
import Button from "../../../components/atom/button";
import { useState } from "react";

export const ToDo: NextPage<any> = () => {

    const [inputValue, setInputValue] = useState("")
    const [toDoList, setToDoList] = useState<string[]>([])

    // 追加ボタンに紐づくinputの状態管理
    const inputLabelOnChenge = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    // 追加ボタン押下
    const inputButtonClick = () => {
        if(!inputValue) return
        
        toDoList.push(inputValue)
        setInputValue("")
    }

    // 削除ボタン押下
    const deleteButtonClick = (index: number) => {
        const deleteList = [...toDoList]
        deleteList.splice(index, 1)
        setToDoList(deleteList)
    }

    return (
        <>
            <h1>ToDo リスト</h1>

            <div>
                <InputLabel value={inputValue} onChange={inputLabelOnChenge}/>
                <Button onClick={inputButtonClick}>
                    追加
                </Button>
            </div>

            <table>
                {toDoList.map((toDo, index) => (
                    <tr key={index}>
                        <td>No{index+1}</td>
                        <td>{toDo}</td>
                        <td>
                            <Button
                                onClick={() => deleteButtonClick(index)}
                            >
                                削除
                            </Button>
                        </td>
                    </tr>
                ))}
            </table>
        </>
    )

}
export default ToDo
