"use client";
import { ReactNode, Suspense } from "react";
import Link from "next/link";
import useFormAddIssue from "../_container/useFormAddIssue";
import styles from "./Form.module.css";

/**
 * 課題追加ページのformcomponent
 * @returns 概要の通り
 */
export const Form = ({ children }: { children: ReactNode }): JSX.Element => {
    const { handleSubmit, postIssueResponse } = useFormAddIssue();

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Suspense fallback={<div>読み込み中</div>}>{children}</Suspense>
            </form>
            {postIssueResponse && (
                <>
                    <hr className={styles.hr} />
                    <h3>
                        <Link href={`./issue/${postIssueResponse.issueKey}`}>
                            課題が追加されました
                        </Link>
                    </h3>
                </>
            )}
        </>
    );
};
export default Form;
