"use client";
import { NextPage } from "next";
import InputText from "@components/elements/input/input-text";
import Button from "@components/elements/button/button";
import { useState } from "react";

const ToDo: NextPage = () => {
    const [inputValue, setInputValue] = useState("");
    const [toDoList, setToDoList] = useState<string[]>([]);

    // 追加ボタンに紐づくinputの状態管理
    const inputLabelOnChenge = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    // 追加ボタン押下
    const inputButtonClick = () => {
        if (!inputValue) {
            alert("タスクを入力してください！");
            return;
        }
        toDoList.push(inputValue);
        setInputValue("");
    };

    // 削除ボタン押下
    const deleteButtonClick = (index: number) => {
        const deleteList = [...toDoList];
        deleteList.splice(index, 1);
        setToDoList(deleteList);
    };

    return (
        <>
            <h3>ToDo リスト</h3>

            <div style={{ display: "flex" }}>
                <InputText
                    value={inputValue}
                    placeholder="タスクを入力"
                    onChange={inputLabelOnChenge}
                />
                <Button onClick={inputButtonClick}>追加</Button>
            </div>

            {toDoList.length ? (
                <table>
                    {toDoList.map((toDo, index) => (
                        <tr key={index}>
                            <td>No{index + 1}</td>
                            <td>{toDo}</td>
                            <td>
                                <Button onClick={() => deleteButtonClick(index)}>削除</Button>
                            </td>
                        </tr>
                    ))}
                </table>
            ) : (
                <div>タスクを登録してください。</div>
            )}
        </>
    );
};
export default ToDo;
