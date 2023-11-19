"use client";
import { useContext, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import { fetcher } from "@api/fetcher";
import { GetProjectsRequest, GetProjectsResponse } from "@api/type/backlog/getProjects";
import { UserAuth, UserAuthContext } from "@contexts/userAuth/userAuth";
import { Select, Option, OptionsInit } from "@components/elements/select/select-form";

type ProjectsProps = {
    name: string;
};

/**
 * プロジェクトのセレクタcomponent
 * @param name componentのname
 * @returns 概要の通り
 */
export const Projects: React.FC<ProjectsProps> = ({ name = "" }: ProjectsProps): JSX.Element => {
    const userAuth: UserAuth = useContext(UserAuthContext);
    const [options, setOptions] = useState<Option[]>(OptionsInit);
    // const router = useRouter();

    const fetch = async () => {
        const req: GetProjectsRequest = new GetProjectsRequest(userAuth);
        const respose = await fetcher<GetProjectsResponse>(req);
        if (respose) {
            const addOption: Option[] = [];
            respose.map((res) => addOption.push({ value: res.id, displayValue: res.name }));
            setOptions([...options, ...addOption]);
        }
    };
    useEffect(() => {
        // if (!userAuth.isAuth) {
        //     router.push("./login");
        // }
        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Select options={options} inputName={name} />;
};
export default Projects;
