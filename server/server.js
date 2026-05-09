import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const api_key = process.env.TMBD_API_KEY;
console.log(api_key);

const app = express();
const port = 3000;

app.use(cors());

app.get("/app/movies", async (req, res) => {
  const { query } = req.query;
  console.log("query recieved:", query);

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${encodeURIComponent(query)}`,
    );

    console.log("response recieved:", response);
    const data = await response.json();
    console.log("Data recieved:", data);
    res.send(data);
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
});

app.listen(port, () => {
  console.log(`backend server is running on port ${port}`);
});
