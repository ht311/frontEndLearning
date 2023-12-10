import { Metadata } from "next";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <h3>課題一覧</h3>
            {children}
        </>
    );
};

export default Layout;

export const metadata: Metadata = {
    title: "課題一覧",
};
