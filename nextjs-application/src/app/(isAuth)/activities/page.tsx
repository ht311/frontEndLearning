import Button from "@/components/elements/button";
import { UserAuth, UserAuthContext } from "@/contexts/userAuth/userAuth";
import { NextPage } from "next";
import { useContext, useState } from "react";
import{ GetAPI} from "./_components/GetAPI"


const Activities = () => {

    return (
        <>  
            <div>
                <GetAPI></GetAPI>
            </div>
        </>
    )
}
export default Activities