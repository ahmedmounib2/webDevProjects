import React from "react";
import ReactDOM from "react-dom";
import addition, { multiply, subtract, divide } from "./calculator.js"; //soln1

// import { add, multiply, subtract, divide } from "./calculator.js"; //soln2

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{addition(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
