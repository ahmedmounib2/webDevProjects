import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

/* function createNotes(noteItem) {
  return (
    <Note key={noteItem.key} title={noteItem.title} text={noteItem.content} />
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
} */

function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} text={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
