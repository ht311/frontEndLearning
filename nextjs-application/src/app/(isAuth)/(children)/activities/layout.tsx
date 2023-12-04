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
