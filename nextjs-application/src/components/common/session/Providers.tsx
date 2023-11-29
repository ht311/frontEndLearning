"use client";

import { SessionProvider } from "next-auth/react";

type Props = {
    children?: React.ReactNode;
};

/**
 * session情報を扱いたいclient componentは、このcomponentを親にすること
 */
export const NextAuthProvider = ({ children }: Props): JSX.Element => {
    return <SessionProvider>{children}</SessionProvider>;
};
