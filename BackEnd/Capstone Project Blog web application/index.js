import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

var allPosts = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { allPosts });
});

app.post("/submit", (req, res) => {
  const title = req.body["topicTitleInput"];
  const postWritten = req.body["topicPost"];
  const date = new Date().toLocaleString().split(",")[0];
  const postObj = { title1: title, post1: postWritten, date1: date };
  allPosts.push(postObj);

  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const postId = parseInt(req.params.id, 10); // Get the post ID from the route
  if (postId >= 0 && postId < allPosts.length) {
    res.render("edit.ejs", { post: allPosts[postId], index: postId });
  } else {
    res.redirect("/"); // Redirect if post doesn't exist
  }
});

app.post("/update/:id", (req, res) => {
  const postId = parseInt(req.params.id, 10); // Extract the post ID from the route
  if (postId >= 0 && postId < allPosts.length) {
    // Update the specific post
    allPosts[postId].title1 = req.body.editTitle; // New title from form
    allPosts[postId].post1 = req.body.editContent; // New content from form
  }
  res.redirect("/"); // Redirect back to the homepage after updating
});

app.post("/delete/:id", (req, res) => {
  const postId = parseInt(req.params.id, 10); // Get the post ID from the route
  if (postId >= 0 && postId < allPosts.length) {
    allPosts.splice(postId, 1); // Remove the post by index
  }
  res.redirect("/"); // Redirect back to the homepage
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
