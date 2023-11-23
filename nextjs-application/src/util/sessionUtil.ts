import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { Session, getServerSession as getServerSessionNextAuth } from "next-auth";

/**
 * sessionを取得
 * server component用
 */
export const getServerSession = async (): Promise<Session> => {
    const session = await getServerSessionNextAuth(authOptions);
    if (!session) throw new Error();

    return session;
};
