import { fetcher } from "@api/fetcher";
import { MyselfRequest, MyselfResponse } from "@api/type/backlog/getMyself";
import NextAuth, { NextAuthOptions, User } from "next-auth";
import {} from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: { strategy: "jwt" },
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                url: { label: "url", type: "text" },
                apiKey: { label: "apiKey", type: "text" },
            },
            // 認証処理
            async authorize(credentials: Record<"url" | "apiKey", string> | undefined) {
                // バリデーション
                if (!credentials) return null;
                const { url, apiKey } = credentials;
                if (!apiKey) return null;
                if (!url) return null;

                // 認証
                const res = await loginHandler(url, apiKey);
                if (!res.isOk) {
                    return null;
                }

                const user: User = {
                    id: res.userId,
                    name: res.name,
                    url,
                    apiKey,
                };
                return user;
            },
        }),
    ],
    pages: {
        // カスタムログインページを追加します。
        signIn: "/login",
    },
    callbacks: {
        // `jwt()`コールバックは`authorize()`の後に実行される
        jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.url = user.url;
                token.apiKey = user.apiKey;
            }
            return token;
        },
        // `session()`コールバックは`jwt()`の後に実行される
        session({ session, token }) {
            session.user.id = token.id;
            session.user.name = token.name;
            session.user.url = token.url;
            session.user.apiKey = token.apiKey;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

type LoginResult = {
    isOk: boolean;
} & MyselfResponse;

const loginHandler = async (url: string, apikey: string): Promise<LoginResult> => {
    // 認証ユーザー情報を取得
    const myselfRequest: MyselfRequest = new MyselfRequest(url, apikey);
    const myselfResponse: MyselfResponse = await fetcher<MyselfResponse>(myselfRequest);

    if (!myselfResponse) {
        return { isOk: false, name: "", userId: "" };
    }

    return { isOk: true, name: myselfResponse.name, userId: myselfResponse.userId };
};
