import { fetcher } from "@api/fetcher";
import { Select, OptionsInit, Option } from "@components/elements/select/select-form";
import { GetPrioritiesRequest, GetPrioritiesResponse } from "@api/type/backlog/getPriorities";
import { Session } from "next-auth";
import { getServerSession } from "@util/sessionUtil";

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
    const session = await getServerSession();

    const selectOptions: Option[] = await fetch(session);

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
    const res: GetPrioritiesResponse = await fetcher<GetPrioritiesResponse>(req);
    if (!res) {
        return OptionsInit;
    }

    return [
        ...OptionsInit,
        ...res.map((res) => {
            // type型を返す都合で省略記法が使えない。下記で書けると嬉しい
            // respose.map((res) => { value: res.id, displayValue: res.name });
            return { value: res.id, displayValue: res.name };
        }),
    ];
};
