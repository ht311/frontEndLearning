"use client";
import { ReactNode, Suspense } from "react";
import Link from "next/link";
import useFormAddIssue from "./useFormAddIssue";

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
                <Link href={`./issue/${postIssueResponse.issueKey}`}>課題が追加されました</Link>
            )}
        </>
    );
};
export default Form;
