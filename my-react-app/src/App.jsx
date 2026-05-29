import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetail";
import SignIn from "./components/Form";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/app/login" element={<SignIn />} />
      <Route path="/app/user/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
