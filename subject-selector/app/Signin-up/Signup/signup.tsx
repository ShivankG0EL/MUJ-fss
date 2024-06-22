"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import './signup.css';
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineExclamationCircle } from "react-icons/hi";

interface SignupFormProps{
    onClose : ()=> void,
}

interface FormProps{
  email : string,
  OTP : string,
  newPassword : string,
  confirmedPassword : string,
}

export function SignupForm(props : SignupFormProps) {
  const [userDetails , setUserDetails] = useState({
    email : '',
    OTP : '',
    newPassword : '',
    confirmedPassword : '',
  });
  const [isInput, setIsInput] = useState({
    emailInput : false,
    OTPInput : false,
    passInput : false,
    confirmPass : false,
  });
  const [isEmail , setIsEmail] = useState(true);
  const [confirmedOTP , setConfirmedOTP] = useState(false);
  const [validPass , setValidPass] = useState (false);
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
  const validateOTP = (e : React.ChangeEvent<HTMLInputElement>) =>{
    // handleChange(e);
    // if(userDetails.OTP.length == 6){
    //   setConfirmedOTP(false)
    // }
    // else{
    //   setConfirmedOTP(true)
    // }
      handleChange(e);
      const otpValue = e.target.value;
      const isValidOTP = otpValue.length === 6;
      setConfirmedOTP(isValidOTP);
  }

    const validatePass = (e : React.ChangeEvent<HTMLInputElement>) => {
      handleChange(e);
      const newPass = e.target.value;
      const passRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+=-{};:"<>,./?])(?=.*[^A-Za-z0-9]).{8,15}$/;
      const samePass = passRegex.test(newPass);
      setValidPass(samePass);
    }

  const confirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    const currentPass = e.target.value;
    const samePass = currentPass === userDetails.newPassword;
    setIsPassWord(samePass); 
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  

  return (
    <div className="max-w-md rounded-2xl p-2 md:p-5 shadow-input bg-white dark:bg-black dark:text-white absolute top-0 left-0 right-0 bottom-0 h-fit m-auto w-[250px] text-sm">
      <span className="absolute right-[10%] cursor-pointer"><Link href='/'><AiOutlineClose /></Link></span>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
      Sign-up
      </h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label className="input__labels" htmlFor="email">Email Address</Label>
          <Input onChange={validateEmail} onFocus={()=> setIsInput({ ...isInput, emailInput: true })}   
            name="email" id="email" placeholder="youremail@muj.manipal.edu" type="email" />
            {(!isEmail || !isInput.emailInput)  ? <></> : <p className={`text-[9px] text-red-600 flex`}><span className="text-[13px] mt-1 mr-1"><HiOutlineExclamationCircle /></span> Please enter valid email</p>}
        </div>
        <div className={confirmedOTP ? `mb-4` : `mb-6`}>
            <Label className="input__labels" htmlFor="OTP">OTP</Label>
            <Input disabled={isEmail} onFocus={()=> setIsInput({ ...isInput, OTPInput: true })}  onChange={validateOTP} name="OTP" className="disabled" id="OTP" placeholder="Enter OTP" type="number" />
            {(confirmedOTP || !isInput.OTPInput)  ? <></> : <p className={`text-[9px] text-red-600 flex`}><span className="text-[13px] mt-1 mr-1"><HiOutlineExclamationCircle /></span> Please enter Correct OTP <a href="#" className="text-blue-500 underline text-[6px] ml-auto">Resend OTP</a></p>}
          </div>
        {confirmedOTP ?
        <>
        <div className="mb-4">
          <Label className="input__labels" htmlFor="newPassword">New Password</Label>
          <Input id="newPassword"  onChange={validatePass} onFocus={()=> setIsInput({ ...isInput, passInput : true })} name="newPassword" placeholder="••••••••" type="password" />
          {(validPass || !isInput.passInput)  ? <></> : <p className={`text-[9px] text-red-600 flex`}><span className="text-[13px] mt-1 mr-1 pass_valid"><HiOutlineExclamationCircle /></span>Password must contain atleast one capital letter, one special letter and minimum of 8 characters</p>}
        </div> 
        <div className="mb-4">
          <Label className="input__labels" htmlFor="confirmPassword">Confirm Password</Label>
          <Input  onChange={confirmPassword} onFocus={()=> setIsInput({ ...isInput, confirmPass: true })}   name="confirmedPassword" id="confirmPassword" placeholder="••••••••" type="password" />
          {(isPassWord || !isInput.confirmPass)  ? <></> : <p className={`text-[9px] text-red-600 flex`}><span className="text-[13px] mt-1 mr-1"><HiOutlineExclamationCircle /></span> Please enter same password</p>}
        </div>
        </>
        :
        <></>
        }
        
        <button
          className="disabled:opacity-60 disabled:cursor-not-allowed
          bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled = {!isPassWord}
          
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
        <p className="text-blue-500 text-[10px] ml-2 ">Already Have an account? <Link href='/Signin-up/Signin' className="underline">Login</Link></p>
      </form>
    </div>
  );
}

