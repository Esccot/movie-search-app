import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import User from "./models/user.js";
import mongoose from "mongoose";

dotenv.config();
const api_key = process.env.TMBD_API_KEY;
console.log(api_key);

const app = express();
const port = 3000;

app.use(cors()); // without this browser blocks the requests
app.use(express.json()); // convert incoming json to js object

async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("monogoDb connected");
  } catch (error) {
    console.error(error);
  }
}

connectMongoDB();

async function getMovies(url, res) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    //console.log("Data recieved:", data);
    res.send(data);
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
}

app.get("/app/trending", (req, res) => {
  getMovies(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`,
    res,
  );
});

app.get("/app/movies", (req, res) => {
  const { query } = req.query;
  getMovies(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`,
    res,
  );
});

app.get("/app/movies/:id", (req, res) => {
  const { id } = req.params;
  //console.log("server side id:", id);
  getMovies(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`, res);
});

app.get("/app/movies/trailers/:id", (req, res) => {
  const { id } = req.params;
  getMovies(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`,
    res,
  );
});

app.listen(port, () => {
  console.log(`backend server is running on port ${port}`);
});

app.post("/app/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password, username });
    res.status(201).json({
      message: "user created",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "signup failed",
      error,
    });
  }
});
