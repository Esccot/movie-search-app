import { useState } from "react";
import useForm from "../Hooks/useForm";
import "./Form.css";

function SignIn() {
  const { form, handleChange, handleSubmit, setShowPassword, showPassword } =
    useForm();
  return (
    <div className="main-container">
      <form className="form-container">
        <h1 className="heading">Start your journey</h1>
        <div className="input-fields">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Enter userName"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="password-button"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? "hide" : "show"}
            </button>
          </div>
        </div>
        <button className="submit-button" type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
}

export default SignIn;
