import React, { useState } from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';


const LogInForm = () => {
    const [formData, setFormData] = useState({
        email:"" ,password:""

    })
    const[showPassword,setShowPassword] = useState(false);
    function changeHandler(event)
    {
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
  return (

    <form>
        <label>
            <p>Email Address<sup>*</sup></p>
            <input type = "email" required value = {formData.email} onChange = {changeHandler} placeholder='Enter email id' name = "email"></input>

        </label>
        <label>
            <p>
                Password<sup>*</sup>

            </p>
            <input 
            required 
            type = {showPassword ? ("text") : ("password")}
             value = {formData.password} onChange = {changeHandler} 
             placeholder = "Enter Password" name = "password"
              />
        

        <span onclick = {()=>setShowPassword((prev)=>(!prev))}>
            {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
        </span>
        <Link to = "#">
            <p>Forgot password</p>
        </Link>
        </label>
        <button>SIgn Up</button>
    </form>
  )
}

export default LogInForm
