import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useForm(route) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    setShowPassword(false);
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log("submitted");
      const response = await fetch(`http://localhost:3000${route}`, {
        method: "post",
        headers: {
          "content-Type": "application/json", // means the data is json
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        navigate("/app/user/profile");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return {
    form,
    handleChange,
    handleSubmit,
    setShowPassword,
    showPassword,
  };
}

export default useForm;
