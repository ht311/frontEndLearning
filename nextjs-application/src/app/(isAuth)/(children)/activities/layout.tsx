import { Metadata } from "next";
import { ReactNode } from "react";

const App = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <h3>アクティビティを参照する</h3>
            {children}
        </>
    );
};

export default App;

export const metadata: Metadata = {
    title: "アクティビティを参照",
};
