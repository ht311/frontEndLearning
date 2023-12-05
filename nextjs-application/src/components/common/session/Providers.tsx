"use client";

import { SessionProvider } from "next-auth/react";

type Props = {
    children?: React.ReactNode;
};

/**
 * session情報を扱いたいclient componentは、このcomponentを親にすること
 */
export const NextAuthProvider = ({ children }: Props): JSX.Element => {
    return (
        <SessionProvider
            // sessionの再取得は5分毎
            refetchInterval={5 * 60}
            refetchOnWindowFocus={false}
        >
            {children}
        </SessionProvider>
    );
};
