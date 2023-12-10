import { fetcher } from "@api/fetcher";
import { GetIssueRequest, GetIssueResponse } from "@api/type/backlog/getIssue";
import InputTextForm from "@components/elements/input/InputTextForm";
import Select from "@components/elements/select/SelectForm";
import { getServerSession } from "@lib/nextAuth/util/sessionUtil";
import { Session, User } from "next-auth";

type DetailProps = {
    id: string;
};

export const Detail: React.FC<DetailProps> = async ({ id }: DetailProps): Promise<JSX.Element> => {
    const session: Session = await getServerSession();
    const res = await fetch(session.user, id);

    return (
        <form>
            <div>
                課題の件名：
                <InputTextForm inputName={"summary"} defaultValue={res.summary}></InputTextForm>
            </div>
            <div>
                タスクのタイプ:
                <Select options={issueTypeIdsOptions} selectName="issueTypeId" required={true} />
            </div>
            <div>
                優先度:
                <Select options={prioritiesOptions} selectName="priorityId" required={true} />
            </div>
            <div>
                状態:
                <Select options={prioritiesOptions} selectName="status" />
            </div>
        </form>
    );
};
export default Detail;

const fetch = async (user: User, id: string): Promise<GetIssueResponse> => {
    const req = new GetIssueRequest(user, id);
    const res = await fetcher<GetIssueResponse>(req);
    return res;
};
