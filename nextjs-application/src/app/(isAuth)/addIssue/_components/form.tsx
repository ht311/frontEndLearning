"use client";
import { fetcher } from "@api/fetcher";
import { AddIssueRequest, AddIssueResponse } from "@api/type/backlog/addIssue";
import InputTextForm from "@components/elements/input/input-text-form";
import { UserAuth, UserAuthContext } from "@contexts/userAuth/userAuth";
import { FormEventHandler, useContext, useState } from "react";
import Projects from "./_elements/projects";
import IssueTypeIds from "./_elements/issueTypeIds";
import Priorities from "./_elements/priorities";

/**
 * 課題追加ページのformcomponent
 * @returns 概要の通り
 */
export const Form: React.FC = (): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [res, setRes] = useState<AddIssueResponse>();
    const userAuth: UserAuth = useContext(UserAuthContext);

    // form押下時の処理
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        console.log(form.get("projectId"));

        // const url = form.get("url") || "";
        // const apikey = form.get("apikey") || "";
        const req: AddIssueRequest = new AddIssueRequest(userAuth);
        req.setBody(form);
        const respose = await fetcher<AddIssueResponse>(req);
        if (respose) {
            setRes(respose);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
                />
            </div>
            <input type="submit" value="追加" />
        </form>
    );
};
export default Form;
