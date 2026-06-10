import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetail";
import SignIn from "./components/SignIn";
import Profile from "./pages/Profile";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/app/user/signup" element={<SignUp />} />
        <Route path="/app/user/profile" element={<Profile />} />
        <Route path="app/user/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
