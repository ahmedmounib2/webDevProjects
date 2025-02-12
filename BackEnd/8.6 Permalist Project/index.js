import express from "express";
import bodyParser from "body-parser";
import { db } from "./keys.js";

db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM items");
  let items = [];
  result.rows.forEach((item) => {
    items.push(item);
  });
  res.render("index.ejs", { listItems: items, listTitle: items.title });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const itemToEditId = req.body.updatedItemId;
  const editedTitle = req.body.updatedItemTitle;
  await db.query("UPDATE items SET title = $1 WHERE id= $2", [
    editedTitle,
    itemToEditId,
  ]);
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const deleteId = req.body.deleteItemId;
  await db.query("DELETE FROM items WHERE id = $1", [deleteId]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
