import { SigninForm } from "./Signin";
// import { Children, createContext } from "react";
// import "./signinPop.css";
// import { SignupForm } from "./signin";

interface SignupPopProps{
    onClose : () => void,
}

const SigninPop = (props : SignupPopProps) => {
    console.log('hello');
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 h-[100vh] w-[100vw] bg-[rgba(49,49,49,0.8)]">
            <SigninForm onClose={props.onClose}/>
        </div>
    )
}   

export default SigninPop;