import { Metadata } from "next";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return <>{children}</>;
};

export default Layout;

export const metadata: Metadata = {
    title: "Home",
};
