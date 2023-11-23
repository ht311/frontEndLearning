import { withAuth } from "next-auth/middleware";

export default withAuth({
    secret: process.env.NEXTAUTH_SECRET,
});

export const config = {
    // login配下以外は、アクセスに認証を必要とする
    matcher: ["/((?!login).*)"],
};
