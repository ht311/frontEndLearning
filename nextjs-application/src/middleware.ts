export { default } from "next-auth/middleware";

export const config = {
    // login配下以外は、アクセスに認証を必要とする
    matcher: ["/((?!login).*)"],
};
