import { fetcher } from "@api/fetcher";
import { GetIssueRequest, GetIssueResponse } from "@api/type/backlog/getIssue";

import InputTextForm from "@components/elements/input/InputTextForm";
import { getServerSession } from "@lib/nextAuth/util/sessionUtil";
import { Session, User } from "next-auth";

type DetailProps = {
    id: string;
};

export const DetailPresenter: React.FC<DetailProps> = async ({
    id,
}: DetailProps): Promise<JSX.Element> => {
    const session: Session = await getServerSession();
    const res = await fetch(session.user, id);

    return (
        <>
            <div>
                課題の件名：
                <InputTextForm inputName={"summary"} defaultValue={res.summary}></InputTextForm>
            </div>
            {res?.issueKey && <div>優先度：{res.issueKey}</div>}
            {res?.summary && <div>状態：{res.summary}</div>}
        </>
    );
};
export default DetailPresenter;

const fetch = async (user: User, id: string): Promise<GetIssueResponse> => {
    const req = new GetIssueRequest(user, id);
    const res = await fetcher<GetIssueResponse>(req);
    return res;
};
