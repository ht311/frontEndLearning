import { Metadata } from "next";
import { ReactNode } from "react";

const App = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <h3>課題の追加</h3>
            {children}
        </>
    );
};

export default App;

export const metadata: Metadata = {
    title: "課題の追加",
};
