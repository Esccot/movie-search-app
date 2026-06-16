import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import User from "./models/user.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import verifyToken from "./middleware/verifyToken.js";
import user from "./models/user.js";

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

app.post("/app/user/signup", async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      res.status(400).json({
        message: "user already exists",
      });
      return;
    }

    const user = await User.create({ email, password, username });
    res.status(201).json({
      message: "user created",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "signup failed",
      error,
    });
  }
});

app.post("/app/user/signin", async (req, res) => {
  try {
    const { username, password } = req.body;

    const findUser = await User.findOne({ username });
    // console.log("findUser:", findUser);
    //console.log("req.body:", req.body);
    //console.log("db password:", findUser.password);
    //console.log("entered password:", password);

    if (!findUser) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    if (findUser.password !== password) {
      return res.status(401).json({
        message: "wrong password",
      });
    }

    const token = jwt.sign(
      {
        id: findUser.id,
        username: findUser.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    res.status(200).json({
      message: "login succesfully",
      user: findUser,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "couldn't find the username",
      error,
    });
  }
});

app.get("/app/user/profile", verifyToken, (req, res) => {
  res.status(200).json({
    user: req.user,
  });
});

app.listen(port, () => {
  console.log(`backend server is running on port ${port}`);
});
