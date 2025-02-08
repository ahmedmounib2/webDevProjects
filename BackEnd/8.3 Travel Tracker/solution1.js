import express from "express";
import bodyParser from "body-parser";
import { db } from "./keys.js";

const app = express();
const port = 3000;

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET home page
app.get("/", async (req, res) => {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  console.log(result.rows);
  res.render("index.ejs", { countries: countries, total: countries.length });
  db.end();
});
/*
Or
app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT country_code FROM visited_countries");
    let countries = result.rows.map((row) => row.country_code); // Extract country codes

    res.render("index.ejs", { countries, total: countries.length });
  } catch (error) {
    console.error("Error fetching countries:", error);
    res.status(500).send("Database error");
  }
});*/

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
