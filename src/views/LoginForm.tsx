import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (evt: any) => {
    setFormData((prevFormData) => {
      console.log({
        ...prevFormData,
        [evt.target.name]: evt.target.value,
      });
      return {
        ...prevFormData,
        [evt.target.name]: evt.target.value,
      };
    });
  };

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    console.log("Form Submited: " + JSON.stringify(evt.target.email.value));
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form autoComplete="off" action="" onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" placeholder="Email" onChange={handleChange} name="email" value={formData.email} className=" bg-stage-200 w-full block " />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" placeholder="Password" onChange={handleChange} name="password" value={formData.password} className=" bg-stage-200 w-full block " />
          </div>

          <button type="submit" className="px-6 mt-10 bg-black text-white">
            <span>Log In</span>
          </button>
        </form>
        <p>
          Forgot password? <a href="#">Click Here..</a>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
