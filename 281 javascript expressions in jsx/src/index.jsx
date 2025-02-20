import React from "react";
import ReactDOM from "react-dom";

const name = "Ahmed";
const luckyNumber = 8;

const fName = "Ahmed";
const lName = "Monib";

// use curly braces to insert consts or vars inside html elements
/*
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your Lucky Number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")

);*/

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your Lucky Number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);

/*
we can also write { 3 + 8 } to be evaluated as JS inside the curly braces
we can also use  {Math.floor(Math.random() * 10)}
we can use any JS expression inside the curly braces but cant write any JS statements
*/

/*
we are not limited to a single set of curly braces when injecting JS so this works as well
<h1>
  Hello {fName} {lName}!
</h1>;
*/

/* can also use Template literals
ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>Your Lucky Number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
*/
