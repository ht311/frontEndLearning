"use client";
import { signOut } from "next-auth/react";
import style from "./LogoutButton.module.css";

export const LogoutButton = (): JSX.Element => {
    return (
        <button
            className={style.button}
            onClick={() => signOut({ redirect: true, callbackUrl: "/login" })}
        >
            ログアウト
        </button>
    );
};

export default LogoutButton;
