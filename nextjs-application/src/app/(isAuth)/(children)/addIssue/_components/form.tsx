// "use client";
// import { fetcher } from "@api/fetcher";
// import { AddIssueRequest, AddIssueResponse, RequestParams } from "@api/type/backlog/addIssue";
// import { FormEventHandler, useState } from "react";
// import Link from "next/link";
import InputTextForm from "@components/elements/input/input-text-form";
import Projects from "./_elements/projects";
import IssueTypeIds from "./_elements/issueTypeIds";
import Priorities from "./_elements/priorities";
// import { useSession } from "next-auth/react";

/**
 * 課題追加ページのformcomponent
 * @returns 概要の通り
 */
export const Form: React.FC = (): JSX.Element => {
    // const [issueKey, setIssueKey] = useState<string>("");
    // const { data: session } = useSession();

    // form押下時の処理
    // const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    // event.preventDefault();

    // const form = new FormData(event.currentTarget);
    // const params: RequestParams = {
    //     projectId: form.get("projectId")?.toString() || "",
    //     summary: form.get("summary")?.toString() || "",
    //     issueTypeId: form.get("issueTypeId")?.toString() || "",
    //     priorityId: form.get("priorityId")?.toString() || "",
    // };

    // const req: AddIssueRequest = new AddIssueRequest(session?.user);
    // req.setBody(params);

    // const respose = await fetcher<AddIssueResponse>(req);

    // if (respose) {
    //     setIssueKey(respose.issueKey);
    // }
    // };

    return (
        <>
            {/* <form onSubmit={handleSubmit}> */}
            <div>
                project: <Projects name="projectId"></Projects>
            </div>
            <div>
                タスクのタイプ: <IssueTypeIds name="issueTypeId" />
            </div>
            <div>
                優先度: <Priorities name="priorityId" />
            </div>
            <div>
                課題の件名:
                <InputTextForm
                    inputName="summary"
                    placeholder="任意の課題の件名を入力してください"
                    pattern=".{0,20}"
                    errorMessage="20文字以内で入力してください"
                />
            </div>
            <input type="submit" value="追加" />
            {/* </form> */}
            {/* {issueKey && <Link href={`./issue/${issueKey}`}>課題が追加されました</Link>} */}
        </>
    );
};
export default Form;
