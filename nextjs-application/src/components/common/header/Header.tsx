import { getServerSession } from "@lib/nextAuth/util/sessionUtil";
import { Session } from "next-auth";
import HeaderPresenter from "./HeaderPresenter";

const Header = async (): Promise<JSX.Element> => {
    const session: Session = await getServerSession();
    const name = session.user.name || "";

    return <HeaderPresenter userName={name} />;
};

export default Header;
