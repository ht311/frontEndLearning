"use client";
import { ReactNode, Suspense } from "react";
import { useActionState } from "react";
import Link from "next/link";
import FormAddIssueAction from "../_container/FormAddIssueAction";
import styles from "./Form.module.css";

/**
 * 課題追加ページのformcomponent
 * @returns 概要の通り
 */
const Form = ({ children }: { children: ReactNode }): React.JSX.Element => {
    const [postIssueResponse, handleSubmit] = useActionState(FormAddIssueAction, undefined);

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
                        <h3>課題の追加に失敗しました。issueKey={postIssueResponse.issueKey}</h3>
                    )}
                    {/* ↑本来はエラーメッセージとかにするべき */}
                </>
            )}
        </>
    );
};
export default Form;
