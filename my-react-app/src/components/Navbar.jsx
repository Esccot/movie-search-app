import { useNavigate } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar-main-container">
      <div className="navbar">
        <h3 className="trending-text" onClick={() => (navigate = `/app/trendingMovies`)}>
          trending Movies
        </h3>
        <h3 className="login-text" onClick={() => navigate("/app/login")}>Login</h3>
      </div>
    </div>
  );
}

export default Navbar;
