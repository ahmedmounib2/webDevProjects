import React from "react";
import ReactDOM from "react-dom";

//for inline styling  in jsx, the style property requires a value that is a JS object, and for us to embed JS in an html element we add a curly brace {}, so style={{ color: "red" }}
/*
ReactDOM.render(
  <h1 style={{ color: "red" }}>Hello World!</h1>,
  document.getElementById("root")
);
*/

const customeStyle = {
  color: "red",
  fontSize: "20px", //font-size is now fontSize
  border: "1px solid black", //now its a string in jsx
};

customeStyle.color = "blue";

ReactDOM.render(
  <h1 style={customeStyle}>Hello World!</h1>,
  document.getElementById("root")
);
