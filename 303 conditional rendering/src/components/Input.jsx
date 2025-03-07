import React from "react";

function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.input}
    />
  );
}

export default Input;
