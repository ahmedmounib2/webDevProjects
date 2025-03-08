import React, { useState } from "react";

function CreateArea(props) {
  const [noteInfo, setNoteInfo] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteInfo((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={noteInfo.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={noteInfo.content}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.onAdd(noteInfo);
            setNoteInfo({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
