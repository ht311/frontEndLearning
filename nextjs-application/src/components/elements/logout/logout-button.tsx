"use client";
import { signOut } from "next-auth/react";
import style from "./logout-button.module.css";

export const LogoutButton = (): JSX.Element => {
    return (
        // <button onClick={() => signOut({ redirect: true, callbackUrl: '/api/auth/logout' })}>
        <button
            className={style.button}
            onClick={() => signOut({ redirect: true, callbackUrl: "/login" })}
        >
            ログアウト
        </button>
    );
};

export default LogoutButton;
