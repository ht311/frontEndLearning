import { fetcher } from "@api/fetcher";
import { GetIssueRequest, GetIssueResponse } from "@api/type/backlog/getIssue";
import { getServerSession } from "@lib/nextAuth/util/sessionUtil";
import { Session, User } from "next-auth";
import Link from "next/link";

type DetailProps = {
    id: string;
};

export const Detail: React.FC<DetailProps> = async ({ id }: DetailProps): Promise<JSX.Element> => {
    const session: Session = await getServerSession();
    const res = await fetch(session.user, id);

    return (
        <>
            {res?.summary && <div>課題名:{res.summary}</div>}
            {res?.issueKey && <div>課題キー:{res.issueKey}</div>}
            <Link href="../issues">課題一覧に移動する</Link>
        </>
    );
};
export default Detail;

const fetch = async (user: User, id: string): Promise<GetIssueResponse> => {
    const req = new GetIssueRequest(user, id);
    const res = await fetcher<GetIssueResponse>(req);
    return res;
};
