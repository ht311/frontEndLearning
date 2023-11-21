"use client";
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import { fetcher } from "@api/fetcher";
import { GetProjectsRequest, GetProjectsResponse } from "@api/type/backlog/getProjects";
import { UserAuth } from "@contexts/userAuth/userAuth";
import { Select, Option, OptionsInit } from "@components/elements/select/select-form";
import { useSession } from "next-auth/react";

type ProjectsProps = {
    name: string;
};

/**
 * プロジェクトのセレクタcomponent
 * @param name componentのname
 * @returns 概要の通り
 */
export const Projects: React.FC<ProjectsProps> = ({ name = "" }: ProjectsProps): JSX.Element => {
    const { data: session } = useSession();

    const userAuth: UserAuth = {
        url: session?.user.url || "",
        apikey: session?.user.apiKey || "",
        isAuth: true,
    };
    const [options, setOptions] = useState<Option[]>(OptionsInit);
    // const router = useRouter();

    const fetch = async () => {
        const req: GetProjectsRequest = new GetProjectsRequest(userAuth);
        const respose = await fetcher<GetProjectsResponse>(req);
        if (respose) {
            const addOption: Option[] = [];
            respose?.map((res) => addOption.push({ value: res.id, displayValue: res.name }));
            setOptions([...options, ...addOption]);
        }
    };
    // fetch();
    useEffect(() => {
        // if (!userAuth.isAuth) {
        //     router.push("./login");
        // }
        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Select
            options={options}
            inputName={name}
            placeholder="プロジェクトを選択してください"
            required={true}
        />
    );
};
export default Projects;
