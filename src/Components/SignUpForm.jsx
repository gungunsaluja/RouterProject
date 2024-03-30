import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <div>
      {/* student-instructor tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>
      <form>
        {/* first name and lastname */}
        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>

            <input
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
            />
          </label>
          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter last name"
              value={formData.lastName}
            ></input>
          </label>
        </div>
        {/* email address */}
        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
          />
        </label>
        {/* create password confirm password */}
        <div>
          <label>
            <p>
              Create Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
            />
            <span onclick={() => setShowPassword((prev) => !prev)}></span>
          </label>

          <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="Confirmpassword"
              onChange={changeHandler}
              placeholder="Confirmpassword"
              value={formData.confirmPassword}
            />
            <span onclick={() => setShowPassword((prev) => !prev)}></span>
          </label>
        </div>
        <button>
            Create button
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
