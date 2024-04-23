import React from "react";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

import { FcGoogle } from "react-icons/fc";

import frameImage from "../assets/frame.png";
const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  // console.log("Ye rha mera form type")
  //   console.log(formtype);

  return (
    <div className="flex flex-wrap-reverse h-max justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
      <div className="Left section mx-auto flex-col flex w-11/12 max-w-[450px]">
        <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="flex flex-col text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-white">{desc1}</span>
          <br />
          <span className="text-blue-400 italic ">{desc2}</span>
        </p>
        {formtype === "signup" ? (
          <SignUpForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LogInForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className="flex mx-auto w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-white "></div>
          <p className=" font-medium text-white leading-[1.375rem]">OR</p>
          <div className="w-full h-[1px] bg-white"></div>
        </div>


        <button className="w-full flex justify-center items-center rounded-[8px] font-medium bg-white text-black px-[12px] gap-x-2 mt-6 border py-[8px] border-black">
          <FcGoogle />
          Sign Up with Google
        </button>
      </div>
      <div className="right-section transition-all duration-150 max-auto relative w-11/12 max-w-[450px]">
        <img className="rounded-md"
          src={frameImage}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="Students"
          width={558}
          height={490}
          loading="lazy"
          className="absolute -top-4 right-4 rounded-md"
        />
      </div>
    </div>
  );
};

export default Template;
