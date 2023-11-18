"use client";
import { createContext } from "react";

/**
 * 認証情報
 */
export type UserAuth = {
    /**
     * backlogのurl
     */
    url: string;
    /**
     * backlogのapikey
     */
    apikey: string;
    /**
     * ログイン認証済か？
     * 認証済：true
     */
    isAuth: boolean;
};

export const UserAuthContext = createContext<UserAuth>({ url: "", apikey: "", isAuth: false });
