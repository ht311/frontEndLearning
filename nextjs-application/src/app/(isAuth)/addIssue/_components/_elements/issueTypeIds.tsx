"use client";
import { fetcher } from "@api/fetcher";
import {
    OptionsInit,
    Select,
    Option as SelectOption,
} from "@components/elements/select/select-form";
import { UserAuth, UserAuthContext } from "@contexts/userAuth/userAuth";
import { useContext, useEffect, useState } from "react";
import { GetProjectsRequest, GetProjectsResponse } from "@api/type/backlog/getProjects";
import { GetIssueTypeIdsRequest, GetIssueTypeIdsResponse } from "@api/type/backlog/getIssueTypeIds";

type IssueTypeIdsProps = {
    name: string;
};

/**
 * 課題タイプのセレクタcomponent
 * @param name componentのname
 * @returns 概要の通り
 */
export const IssueTypeIds: React.FC<IssueTypeIdsProps> = ({
    name,
}: IssueTypeIdsProps): JSX.Element => {
    const userAuth: UserAuth = useContext(UserAuthContext);
    const [selectOptions, setSelectOptions] = useState<SelectOption[]>(OptionsInit);

    useEffect(() => {
        // 1. プロジェクトの一覧を取得
        // 2. プロジェクトIDに紐づく課題の定義を取得
        // 3. 課題の定義をセレクタのoptionに変換
        getProjects(userAuth).then((projects) => {
            projects.map((project) => {
                getIssueTypeIds(userAuth, project.id).then((issueTypes) => {
                    const addOption: SelectOption[] = [];
                    issueTypes.map((issueType) => {
                        addOption.push({ value: issueType.id, displayValue: issueType.name });
                    });
                    setSelectOptions([...selectOptions, ...addOption]);
                });
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Select
            options={selectOptions}
            inputName={name}
            placeholder="課題のタイプを選択してください"
            required={true}
        />
    );
};
export default IssueTypeIds;

/**
 * Backlogのプロジェクト一覧の取得 APIを発行する
 */
const getProjects = async (userAuth: UserAuth) => {
    const req: GetProjectsRequest = new GetProjectsRequest(userAuth);
    return await fetcher<GetProjectsResponse>(req);
};

/**
 * Backlogの種別一覧の取得 APIを発行する
 */
const getIssueTypeIds = async (userAuth: UserAuth, projectId: number) => {
    const req: GetIssueTypeIdsRequest = new GetIssueTypeIdsRequest(userAuth, projectId);
    return await fetcher<GetIssueTypeIdsResponse>(req);
};
