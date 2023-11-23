import { fetcher } from "@api/fetcher";
import { Select, OptionsInit, Option } from "@components/elements/select/select-form";
import { GetPrioritiesRequest, GetPrioritiesResponse } from "@api/type/backlog/getPriorities";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

type PrioritiesProps = {
    name: string;
};

/**
 * 課題の優先度のセレクタcomponent
 * @param name componentのname
 * @returns 概要の通り
 */
export const Priorities: React.FC<PrioritiesProps> = async ({
    name,
}: PrioritiesProps): Promise<JSX.Element> => {
    const session = await getServerSession(authOptions);
    if (!session) return <></>;

    const selectOptions: Option[] = [...OptionsInit, ...(await fetch(session))];

    return (
        <Select
            options={selectOptions}
            inputName={name}
            placeholder="優先度を選択してください"
            required={true}
        />
    );
};
export default Priorities;

const fetch = async (session: Session): Promise<Option[]> => {
    const req: GetPrioritiesRequest = new GetPrioritiesRequest(session.user);
    const respose = await fetcher<GetPrioritiesResponse>(req);
    if (!respose) {
        return [];
    }

    return respose.map((res) => {
        return { value: res.id, displayValue: res.name };
    });
};
