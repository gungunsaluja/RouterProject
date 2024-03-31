import React from 'react'
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';


import frameImage from "../assets/frame.png";
const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn})=>{
  // console.log("Ye rha mera form type")
  //   console.log(formtype);

  
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
      <div className='w-11/12 max-w-[450px] mx-0'>
        <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <span className='text-white'>{desc1}</span>
            <br/>
            <span className='text-blue-400 italic '>{desc2}</span>
        </p>
        {formtype === "signup" ?(<SignUpForm setIsLoggedIn = {setIsLoggedIn}/>):(<LogInForm setIsLoggedIn = {setIsLoggedIn}/>)
}
<div className = 'flex w-full items-centermy-4 gap-x-2'>
    <div className=' w-full h-[1px] bg-white '>
        
    </div>
    <p className='text-black font-medium leading-[1.375rem]'>OR</p>
    <div className = ' w-full h-[1px] bg-white'></div>
</div>
         <button>Sign Up With Google</button>
      </div>
      <div>
        <img src = {frameImage} alt = "Pattern" width = {558} height = {504} loading = "lazy" />
        <img src = {image} alt = "Students" width = {558} height = {490} loading = "lazy"/>
      </div>
    </div>
  )
}

export default Template
