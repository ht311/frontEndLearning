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
