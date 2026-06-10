import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar-main-container">
      <div className="navbar">
        <NavLink to={"app/trendingMovies"} className={"trending-text"}>
          Trending Movies
        </NavLink>

        <NavLink to={"/app/user/signup"} className="login-text">
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
