import { ReactNode } from "react";
import style from "./Table.module.css";

export type TableProps = {
    // データ構造が微妙、componentとしても使いまわしが効きづらい
    // テーブルはその画面専用のcomponentとして定義するようにしてcssを使いまわすのがベター？
    // あるいはこのcomponentを<table className={style.tableStyle}>{children}</table>にするとか？
    /** th */
    head: string[];
    /** td */
    body: ReactNode[][];
};

export const Table = ({ head, body }: TableProps): JSX.Element => {
    return (
        <table className={style.tableStyle}>
            <thead>
                <tr>
                    <th key={"no"}>No</th>
                    {head?.map((h, index) => <th key={index}>{h}</th>)}
                </tr>
            </thead>
            <tbody>
                {body?.map((b, index) => (
                    <tr key={index}>
                        <td key={"no" + index + 1}>{index + 1}</td>
                        {b.map((bChild, bChildIndex) => (
                            <td key={bChildIndex}>{bChild}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
