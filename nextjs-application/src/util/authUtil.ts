import { signOut } from "next-auth/react";

/**
 * ログアウトして、ログイン画面に遷移
 */
export const logOut = () => signOut({ redirect: true, callbackUrl: "/login" });
