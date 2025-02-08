import express from "express";
import bodyParser from "body-parser";
import { db } from "./keys.js";

db.connect();

const app = express();
const port = 3000;

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

// POST: Add a country
app.post("/add", async (req, res) => {
  try {
    const countryPicked = req.body.country;

    // Fetch country code from the database
    const result = await db.query(
      "SELECT LOWER(country_name) AS country_name, country_code FROM countries"
    );

    const countriesList = result.rows;

    const foundCountry = countriesList.find(
      (c) => c.country_name === countryPicked.toLowerCase()
    );

    if (foundCountry) {
      const newCode = foundCountry.country_code;

      // Insert into visited_countries if not already added
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1) ON CONFLICT DO NOTHING",
        [newCode]
      );

      console.log(`Added country: ${newCode}`);
    } else {
      console.log("Country not found in the database.");
    }

    res.redirect("/");
  } catch (error) {
    console.error("Error adding country:", error);
    res.status(500).send("Database error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
