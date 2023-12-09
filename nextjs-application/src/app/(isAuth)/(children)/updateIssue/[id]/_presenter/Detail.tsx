import { fetcher } from "@api/fetcher";
import { GetIssueRequest, GetIssueResponse } from "@api/type/backlog/getIssue";
import InputText from "@components/elements/input/InputText";
import { getServerSession } from "@lib/nextAuth/util/sessionUtil";
import { Session, User } from "next-auth";

type DetailProps = {
    id: string;
};

export const Detail: React.FC<DetailProps> = async ({ id }: DetailProps): Promise<JSX.Element> => {
    const session: Session = await getServerSession();
    const res = await fetch(session.user, id);

    return (
        <>
            <div>
                課題の件名：<InputText></InputText>
            </div>
            <div>優先度：{res?.issueKey && <div>課題キー:{res.issueKey}</div>}</div>
            <div>状態：{res?.summary && <div>課題名:{res.summary}</div>}</div>
        </>
    );
};
export default Detail;

const fetch = async (user: User, id: string): Promise<GetIssueResponse> => {
    const req = new GetIssueRequest(user, id);
    const res = await fetcher<GetIssueResponse>(req);
    return res;
};
