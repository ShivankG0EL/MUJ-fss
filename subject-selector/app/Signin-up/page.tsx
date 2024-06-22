'use client'
import { useState } from "react";
import Link from "next/link";
// import { createPortal } from "react-dom";
// import { SignupPop } from "./Signup/page";
// import  SigninPop  from "./Signin/page";

export default function Popup(){
    const [isPopupVisible, setIsPopupVisible] = useState({
        SignupPOP : false,
        SigninPOP : false,
    });

    const toggleSignupPopup = () =>{
        setIsPopupVisible({...isPopupVisible, SignupPOP : !(isPopupVisible.SignupPOP) });
    }

    const toggleSigninPopup = () =>{
        setIsPopupVisible({...isPopupVisible, SigninPOP : !(isPopupVisible.SigninPOP) });
    }

    return(
        <div className="flex mt-2">
        <button onClick={()=>{
            toggleSignupPopup()
        }} className="p-2 rounded-xl bg-orange-500"><Link href="/Signin-up/Signup">Signup</Link></button>
        <button onClick={()=>{
            toggleSigninPopup()
        }} className="p-2 rounded-xl bg-orange-500 ml-2"><Link href="/Signin-up/Signin">Signin</Link></button>
        </div>
    )
}