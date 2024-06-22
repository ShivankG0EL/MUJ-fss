import { SignupForm } from "./signup";
// import { Children, createContext } from "react";
// import "./signinPop.css";
// import { SignupForm } from "./signin";

interface SignupPopProps{
    onClose : () => void,
}

const SignupPop = (props : SignupPopProps) => {
    console.log('hello');
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 h-[100vh] w-[100vw] bg-[rgba(49,49,49,0.8)]">
            <SignupForm onClose={props.onClose}/>
        </div>
    )
}   

export default SignupPop;