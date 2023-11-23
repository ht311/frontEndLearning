import { fetcher } from "@api/fetcher";
import { GetProjectsRequest, GetProjectsResponse } from "@api/type/backlog/getProjects";
import { Select, Option, OptionsInit } from "@components/elements/select/select-form";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

type ProjectsProps = {
    name: string;
};

/**
 * プロジェクトのセレクタcomponent
 * @param name componentのname
 * @returns 概要の通り
 */
export const Projects: React.FC<ProjectsProps> = async ({
    name,
}: ProjectsProps): Promise<JSX.Element> => {
    const session = await getServerSession(authOptions);
    if (!session) return <></>;

    const selectOptions: Option[] = [...OptionsInit, ...(await fetch(session))];

    return (
        <Select
            options={selectOptions}
            inputName={name}
            placeholder="プロジェクトを選択してください"
            required={true}
        />
    );
};
export default Projects;

const fetch = async (session: Session): Promise<Option[]> => {
    const req: GetProjectsRequest = new GetProjectsRequest(session.user);
    const respose = await fetcher<GetProjectsResponse>(req);
    if (!respose) {
        return [];
    }

    return respose.map((res) => {
        return { value: res.id, displayValue: res.name };
    });
};
