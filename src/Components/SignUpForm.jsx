import React, { useState } from "react";
import {toast} from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


const SignUpForm = ({setIsLoggedIn}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false);
  const [accountType,setAccount] = useState("student");
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }
  function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
        toast.error("Passwords do not match");
       return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
        ...formData
    };
    const finalData = {
      ...accountData,
      accountType
    }
    console.log("printing account data");
    console.log(accountData);
    navigate("/dashboard");
  }
  return(
    <div>
      {/* student-instructor tab */}
      <div className="flex bg-gray-700 p-1 gap-x-1  max-w-max rounded-full ">
        <button className={`${accountType==="student" ? "bg-black text-white":"bg-transparent text-gray-300"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=>setAccount("student")}>Student</button>
        <button 
        className={`${accountType==="student" ? "bg-black text-white":"bg-transparent text-gray-300"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setAccount("instructor")}>Instructor</button>

      </div>
      <form onSubmit = {submitHandler}>
        {/* first name and lastname */}
        <div className="flex gap-x-4 mt-[20px]">
          <label className = "w-full">
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem] '>
              First Name<sup className="text-pink-400">*</sup>
            </p>

            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className = 'bg-black rounded-[0.5rem] text-white w-full px-[12px] py-[8px] mt-6'
            />
          </label>
          <label>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
              Last Name<sup className= "text-pink-400">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter last name"
              value={formData.lastName}
              className = 'bg-black rounded-[0.5rem] text-white w-full px-[12px] py-[8px] mt-6'
            ></input>
          </label>
        </div>
        {/* email address */}
        <label className= "w-full mt-4">
          <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'> 
            Email Address<sup className = "text-pink-400">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
            className = 'bg-black rounded-[0.5rem] text-white w-full px-[12px] py-[8px] mt-6'
          />
        </label>
        {/* create password confirm password */}
        <div className="w-full flex gap-x-4 mt-4">
          <label className="w-full relative">
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem] '>
              Create Password<sup className = 'text-pink-400'>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className = 'bg-black rounded-[0.5rem] text-white w-full px-[12px] py-[8px] mt-6'
            />
            <span onclick={() => setShowPassword((prev) => !prev)}
            >
              {
                showPassword?(<AiOutlineEyeInvisible fontsize={24} fill = '#AFB2BF'/>):(<AiOutlineEye fontsize = {24} fill = '#AFB2BF'/>)
              }
            </span>
          </label>

          <label className = "w-full relative">
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem] '>
              Confirm Password<sup className="text-pink-400">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className = 'bg-black rounded-[0.5rem] text-white w-full px-[12px] py-[8px] mt-6'
            />
            <span className="absolute right-3 top-[38px] cursor-pointer" onclick={() => setShowPassword((prev) => !prev)}>
            {
                showPassword?(<AiOutlineEyeInvisible fontsize={24} fill = '#AFB2BF'/>):(<AiOutlineEye fontsize = {24} fill = '#AFB2BF'/>)
              }
            </span>
          </label>
        </div>
        <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6">
            Create button
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
