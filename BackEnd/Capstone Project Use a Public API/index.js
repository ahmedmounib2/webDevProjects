import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

const api_url = "https://dog.ceo/api/breeds";

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(api_url + "/image/random");
    console.log(result.data);
    res.render("index.ejs", {
      message: result.data.message,
      status: result.data.status,
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
