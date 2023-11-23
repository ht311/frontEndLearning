import { fetcher } from "@api/fetcher";
import { GetProjectsRequest, GetProjectsResponse } from "@api/type/backlog/getProjects";
import { Select, Option, OptionsInit } from "@components/elements/select/select-form";
import { Session } from "next-auth";
import { getServerSession } from "@util/sessionUtil";

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
    const session = await getServerSession();

    const selectOptions: Option[] = await fetch(session);

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
        return OptionsInit;
    }

    return [
        ...OptionsInit,
        ...respose.map((res) => {
            return { value: res.id, displayValue: res.name };
        }),
    ];
};
