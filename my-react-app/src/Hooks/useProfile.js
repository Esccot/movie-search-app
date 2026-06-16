import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useProfile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchToken(params) {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/app/user/signin");
        return;
      }

      const response = await fetch("http://localhost:3000/app/user/profile", {
        headers: {
          Authorization: token,
        },
      });

      if (!response.ok) {
        localStorage.removeItem("token");
        navigate("/app/user/sigin");
        return;
      }
      const data = await response.json();

      setUser(data.user); // the user is the same object we created in verifitoken.js
    }
    fetchToken();
  }, []);

  return { user };
}

export default useProfile;
