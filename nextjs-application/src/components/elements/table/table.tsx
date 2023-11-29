import style from "./table.module.css";

export type TableProps = {
    /** th */
    head: string[];
    /** td */
    body: string[][];
};

export const Table = ({ head, body }: TableProps): JSX.Element => {
    return (
        <table className={style.tableStyle}>
            <thead>
                <tr>
                    <th key={"no"}>No</th>
                    {head.map((h, index) => (
                        <th key={index}>{h}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {body.map((b, index) => (
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
