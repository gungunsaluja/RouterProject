import React, { useState } from 'react';
import {toast} from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {Link,useNavigate} from 'react-router-dom';

const LogInForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    
        email:"" ,password:""

    })

    const[showPassword, setShowPassword] = useState(false);
    function changeHandler(event)
    {
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
                // mtlb ki email ki value email me jayegi and password ki value password me jayegii
            }
        ) )
    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
       
        navigate("/dashboard");

    }
  return (

    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className = 'w-full'>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-400'>*</sup></p>
            <input type = "email" required value = {formData.email} onChange = {changeHandler} className = 'bg-black rounded-[0.5rem] text-white w-full p-[12px]' placeholder='Enter email address' name = "email"></input>

        </label>
        <label className = "w-full relative">
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem] '>
                Password<sup className = "text-pink-400">*</sup>

            </p>
            <input 
            required 
            type = {showPassword ? ("text") : ("password")}
             value = {formData.password} onChange = {changeHandler} 
             placeholder = "Enter Password" name = "password" className = 'bg-black rounded-[0.5rem] text-white w-full p-[12px]'
              />
        

        <span className = 'absolute right-3 top-[38px] cursor-pointer' onClick = {()=>setShowPassword((prev)=>!prev)}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize = {24} fill = '#AFB2BF'/>):(<AiOutlineEye fontSize = {24} fill = '#AFBF2BF'/>)}
        </span>
        <Link to = "#">
            <p className = 'text-xs mt-1 text-blue-400 w-full max-w-max ml-auto '>Forgot password</p>
        </Link>
        </label>
        <button className = 'bg-yellow-50 rounded-[8px] font-medium text-black px-[12px] py-[8px]'>LogIn</button>
    </form>
  )
}

export default LogInForm
