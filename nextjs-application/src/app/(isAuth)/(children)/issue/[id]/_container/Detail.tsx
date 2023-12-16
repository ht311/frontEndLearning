import { fetcher } from "@api/fetcher";
import { GetIssueRequest, GetIssueResponse } from "@api/type/backlog/getIssue";
import { getServerSession } from "@lib/nextAuth/util/sessionUtil";
import { Session, User } from "next-auth";
import DetailPresenter from "../_presenter/DetailPresenter";

type DetailProps = {
    id: string;
};

const Detail: React.FC<DetailProps> = async ({ id }: DetailProps): Promise<JSX.Element> => {
    const session: Session = await getServerSession();
    const res = await fetch(session.user, id);

    return <DetailPresenter summary={res.summary} id={id} />;
};
export default Detail;

const fetch = async (user: User, id: string): Promise<GetIssueResponse> => {
    const req = new GetIssueRequest(user, id);
    const res = await fetcher<GetIssueResponse>(req);
    return res;
};
