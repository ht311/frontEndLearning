import { ReactNode } from "react";
import Header from "@components/common/header/header";

const App = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            {/* <UserAuthProvider userAuth={userAuth}>{children}</UserAuthProvider> */}
            {children}
        </>
    );
};

export default App;
