import { ReactNode } from "react";
import Footer from "@components/common/footer/footer";

const App = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
};

export default App;
