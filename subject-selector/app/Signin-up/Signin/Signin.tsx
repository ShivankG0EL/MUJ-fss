"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import './signin.css';
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineExclamationCircle } from "react-icons/hi";

interface SigninFormProps{
    onClose : ()=> void,
}

interface FormProps{
  email : string,
  Password : string,
}

export function SigninForm(props : SigninFormProps) {
  const [userDetails , setUserDetails] = useState<FormProps>({
    email : '',
    Password : '',
  });
  const [isInput, setIsInput] = useState({
    emailInput : false,
    passInput : false,
  });
  const [isEmail , setIsEmail] = useState(true);
  const [isPassWord , setIsPassWord] = useState (false);

  const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };
  
  const div = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(`${value} + ${name}`)
    // setIsInput(false);
    setUserDetails((prevFormData) => ({...prevFormData, [name]: value }));
  };

  const validateEmail = (e : React.ChangeEvent<HTMLInputElement>) => {
    // handleChange(e);
    // if(userDetails.email.match(/^(([^<>()[\]\\,,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@|((\[[0-9]{1,3}\. [0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
    // if(userDetails.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/))
    //   {setIsEmail(false)}
    // else{
    //   setIsEmail(true)
    // }
      handleChange(e);
      const emailValue = e.target.value;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
      const isValidEmail = emailRegex.test(emailValue);
      setIsEmail(!isValidEmail);
  };

  const validatePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    const Pass = e.target.value;
    const samePass = Pass.length > 0;
    setIsPassWord(samePass); 
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  

  return (
    <div className="max-w-md rounded-2xl p-2 md:p-5 shadow-input bg-white dark:bg-black dark:text-white absolute top-0 left-0 right-0 bottom-0 h-fit m-auto w-[250px] text-sm">
      <span className="absolute right-[10%] cursor-pointer"><Link href="/"><AiOutlineClose /></Link></span>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
      Sign-in
      </h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label className="input__labels" htmlFor="email">Email Address</Label>
          <Input onChange={validateEmail} onFocus={()=> setIsInput({ ...isInput, emailInput: true })}   
            name="email" id="email" placeholder="youremail@muj.manipal.edu" type="email" />
            {(!isEmail || !isInput.emailInput)  ? <></> : <p className={`text-[9px] text-red-600 flex`}><span className="text-[13px] mt-1 mr-1"><HiOutlineExclamationCircle /></span> Please enter valid email</p>}
        </div>
       
        <div className="mb-4">
          <Label className="input__labels" htmlFor="confirmPassword">Password</Label>
          <Input disabled={isEmail}  onChange={validatePass} onFocus={()=> setIsInput({ ...isInput, passInput : true })}   name="confirmedPassword" id="confirmPassword" placeholder="••••••••" type="password" />
          {/* {(isPassWord || !isInput.passInput)  ? <></> : <p className={`text-[9px] text-red-600 flex`}><span className="text-[13px] mt-1 mr-1 pass_valid"><HiOutlineExclamationCircle /></span>Password must contain atleast one capital letter, one special letter and minimum of 8 characters</p>} */}
        </div>
               
        <button
          className="disabled:opacity-60 disabled:cursor-not-allowed
          bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled = {!isPassWord}
          
        >
          Sign in &rarr;
          <BottomGradient />
        </button>
        <p className="text-blue-500 text-[10px] ml-2 ">Don't have an account? <Link href='/Signin-up/Signup' className="underline">Sign-up</Link></p>
      </form>
    </div>
  );
}

