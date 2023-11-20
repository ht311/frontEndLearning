// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { DefaultSession } from "next-auth";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    // クライアント側で使用するsession（useSessionから取得するオブジェクト）にプロパティを追加します。
    // ここでは`apiKey`と`url`を追加しています。
    interface Session {
        user: {
            apiKey?: string;
            url?: string;
        } & DefaultSession["user"];
    }
    interface User {
        apiKey?: string;
        url?: string;
    }
}

declare module "next-auth/jwt" {
    // "jwt"コールバックのtokenパラメータに任意のプロパティを追加します。
    interface JWT {
        apiKey?: string;
        url?: string;
    }
}
