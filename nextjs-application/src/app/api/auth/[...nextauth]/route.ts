// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    debug: true,
    secret: process.env.NEXTAUTH_SECRET,
    session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            name: "SignIn",
            // `credentials`は、サインインページでフォームを生成するために使用される
            credentials: {
                url: { label: "url", type: "text" },
                apiKey: { label: "apikey", type: "text" },
            },
            // 認証処理
            async authorize(credentials: Record<"url" | "apiKey", string> | undefined) {
                console.log("aaaa");
                if (!credentials) return null;

                const { url, apiKey } = credentials;

                if (!apiKey) return null;
                if (!url) return null;

                // const res = await loginHandler(url, apiKey);
                // if (!res.isOk) {
                //     return null;
                // }

                const user = {
                    id: "1",
                    name: "foo bar",
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
        // `user`に追加したプロパティ`url`と`apiKey`を`token`に設定
        jwt({ token, user }) {
            if (user) {
                token.url = user.url;
                token.apiKey = user.apiKey;
            }
            return token;
        },
        // `session()`コールバックは`jwt()`の後に実行される
        // `token`に追加したプロパティ`url`と`apiKey`を`session`に設定
        session({ session, token }) {
            session.user.apiKey = token.apiKey;
            session.user.url = token.url;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
type LoginResult = {
    isOk: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const loginHandler = async (url: string, apikey: string): Promise<LoginResult> =>
    // 適当なAPIを叩いて200点代が帰ってくるならログイン可とする
    fetch(`https://${url}.backlog.com/api/v2/space?apiKey=${apikey}`)
        .then((response) => {
            if (!response.ok) {
                return { isOk: false };
            }

            return { isOk: true };
        })
        .catch((error: Error) => {
            console.error(error);
            return { isOk: false };
        });
