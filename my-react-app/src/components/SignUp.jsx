import useForm from "../Hooks/useForm";
import "./Form.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const { form, handleChange, handleSubmit, setShowPassword, showPassword } =
    useForm("/app/user/signup");

  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <form className="form-container" onSubmit={handleSubmit}>
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
          <button
            className="submit-button"
            type="submit"
          >
            submit
          </button>
          <p className="form-paragraph">
            Already have an account ?
            <a onClick={()=> navigate("/app/user/signin")}> SignIn </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
