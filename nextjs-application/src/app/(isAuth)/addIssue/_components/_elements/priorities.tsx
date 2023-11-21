"use client";
import { useEffect, useState } from "react";
import { fetcher } from "@api/fetcher";
import { UserAuth } from "@contexts/userAuth/userAuth";
import { Select, Option, OptionsInit } from "@components/elements/select/select-form";
import { GetPrioritiesRequest, GetPrioritiesResponse } from "@api/type/backlog/getPriorities";
import { useSession } from "next-auth/react";

type PrioritiesProps = {
    name: string;
};

/**
 * 課題の優先度のセレクタcomponent
 * @param name componentのname
 * @returns 概要の通り
 */
export const Priorities: React.FC<PrioritiesProps> = ({ name }: PrioritiesProps): JSX.Element => {
    const { data: session } = useSession();

    const userAuth: UserAuth = {
        url: session?.user.url || "",
        apikey: session?.user.apiKey || "",
        isAuth: true,
    };
    const [options, setOptions] = useState<Option[]>(OptionsInit);

    const fetch = async () => {
        const req: GetPrioritiesRequest = new GetPrioritiesRequest(userAuth);
        const respose = await fetcher<GetPrioritiesResponse>(req);
        if (respose) {
            const addOption: Option[] = [];
            respose.map((res) => addOption.push({ value: res.id, displayValue: res.name }));
            setOptions([...options, ...addOption]);
        }
    };
    useEffect(() => {
        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Select
            options={options}
            inputName={name}
            placeholder="優先度を選択してください"
            required={true}
        />
    );
};
export default Priorities;
