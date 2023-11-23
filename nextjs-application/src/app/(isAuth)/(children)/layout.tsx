import { ReactNode } from "react";
import Footer from "@components/common/footer/footer";

const App = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {/* <UserAuthProvider userAuth={userAuth}>{children}</UserAuthProvider> */}
            {children}
            <Footer />
        </>
    );
};

export default App;
