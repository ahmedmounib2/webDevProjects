import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function toggleDone() {
    setIsDone((prevValue) => !prevValue);
  }
  return (
    <div onClick={toggleDone}>
      <li
        style={{
          textDecoration: isDone ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
