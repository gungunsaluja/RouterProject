import React from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
        <label>
            <p>Email Address<sup>*</sup></p>
            <input required type = "email" name = "email" 
             onChange={changeHandler} placeholder="Enter Email Address" value = {formData.email}/>
          </label>
      </form>
    </div>
  );
};

export default SignUpForm;
