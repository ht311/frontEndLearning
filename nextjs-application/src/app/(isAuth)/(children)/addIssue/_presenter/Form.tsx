"use client";
import { ReactNode, Suspense } from "react";
import { useFormState } from "react-dom";
import Link from "next/link";
import FormAddIssueAction from "../_container/FormAddIssueAction";
import styles from "./Form.module.css";

/**
 * 課題追加ページのformcomponent
 * @returns 概要の通り
 */
const Form = ({ children }: { children: ReactNode }): JSX.Element => {
    const [postIssueResponse, handleSubmit] = useFormState(FormAddIssueAction, undefined);

    return (
        <>
            <Suspense fallback={<>loading...</>}>
                <form action={handleSubmit}>{children}</form>
            </Suspense>
            {postIssueResponse && (
                <>
                    <hr className={styles.hr} />
                    {postIssueResponse.issueKey ? (
                        <h3>
                            <Link href={`../issue/${postIssueResponse.issueKey}`}>
                                課題が追加されました
                            </Link>
                        </h3>
                    ) : (
                        <h3>課題の追加に失敗しました{postIssueResponse.issueKey}</h3>
                    )}
                </>
            )}
        </>
    );
};
export default Form;
