import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { db } from "./keys.js";

db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//var urlSearchBook = "https://openlibrary.org/search.json?q='";

app.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM books");
  let books = [];
  result.rows.forEach((book) => {
    books.push(book);
  });
  res.render("index.ejs", { books });
});

app.post("/add-book", async (req, res) => {
  const { title, author, review, review_text } = req.body;
  const apiUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(
    title
  )}`;

  try {
    const response = await axios.get(apiUrl);
    const books = response.data.docs;

    let coverUrl = null;
    if (books.length > 0 && books[0].cover_edition_key) {
      coverUrl = `https://covers.openlibrary.org/b/olid/${books[0].cover_edition_key}-L.jpg`;
    }

    await db.query(
      "INSERT INTO books (title, author, review, review_text, cover_url) VALUES ($1, $2, $3, $4, $5)",
      [title, author, review, review_text, coverUrl]
    );

    res.redirect("/");
  } catch (error) {
    console.error("Error fetching book cover:", error);
    res.redirect("/");
  }
});

app.post("/update-book/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author, review, review_text } = req.body;

  try {
    await db.query(
      "UPDATE books SET title = $1, author = $2, review = $3, review_text = $4 WHERE id = $5",
      [title, author, review, review_text, id]
    );

    res.redirect("/");
  } catch (error) {
    console.error("Error updating book:", error);
    res.redirect("/");
  }
});

app.post("/delete-book", async (req, res) => {
  const { id } = req.body;

  try {
    await db.query("DELETE FROM books WHERE id = $1", [id]);
    res.redirect("/");
  } catch (error) {
    console.error("Error deleting book:", error);
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

/*
app.post("/search", async (req, res) => {
  const searchQuery = req.body.search;
  try {
    const result = await axios.get(url + searchQuery + "'");

    // Extract relevant book data (first 5 results for example)
    const books = result.data.docs.slice(0, 5).map((book) => ({
      title: book.title,
      author: book.author_name ? book.author_name.join(", ") : "Unknown Author",
      coverKey: book.cover_edition_key || "No Cover Available",
    }));

    console.log(books); // Debugging to check extracted data

    res.render("index.ejs", { books });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.render("index.ejs", { books: [] }); // Return an empty list in case of error
  }
});
*/

/* {
      author_key: [Array],
      author_name: [Array],
      cover_edition_key: 'OL46479707M',
      cover_i: 13170693,
      edition_count: 3,
      first_publish_year: 1818,
      has_fulltext: false,
      key: '/works/OL10587016W',
      language: [Array],
      public_scan_b: false,
      title: 'The alchemist'
    },
    {
      author_key: [Array],
      author_name: [Array],
      cover_edition_key: 'OL13992343M',
      cover_i: 5746244,
      edition_count: 2,
      first_publish_year: 1818,
      has_fulltext: true,
      ia: [Array],
      ia_collection_s: 'americana;cdl;iacl;yrlsc',
      key: '/works/OL1650834W',
      language: [Array],
      lending_edition_s: 'OL13992343M',
      lending_identifier_s: 'alchemist00hughiala',
      public_scan_b: true,
      title: 'The alchemist'
    },*/
