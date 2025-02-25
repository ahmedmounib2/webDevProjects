/*
import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function renderConditionally() {
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
 */
/*
import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();

console.log(currentTime);

function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App; */

import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();

console.log(currentTime);

function App() {
  return (
    <div className="container">
      {
        //isLoggedIn ? <h1>Hello</h1> : <Login />
        //currentTime > 23 ? <h1>why are you still working?</h1> : null
        // same functionality using the and operator
        currentTime > 2 && <h1>why are you still working?</h1>
      }
    </div>
  );
}

export default App;
