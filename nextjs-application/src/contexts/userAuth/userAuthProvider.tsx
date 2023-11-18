"use client";
// import { createContext, useState } from "react";
import { UserAuth, UserAuthContext } from "./userAuth";

type Props = {
    userAuth: UserAuth;
    children: React.ReactNode;
};

const UserAuthProvider = ({ userAuth, children }: Props): JSX.Element => {
    // //createContext
    // const [state, setState] = useState<UserAuth>(userAuth)
    // const updateUserAuth = (updateUserAuth: UserAuth) => {
    //     setState(updateUserAuth)
    // }

    // const global = {
    //     state,
    //     updateUserAuth
    // }

    return <UserAuthContext.Provider value={userAuth}>{children}</UserAuthContext.Provider>;
};

export default UserAuthProvider;
