import React from "react";
import ReactDOM from "react-dom";
import pie, { doublePi, triplePi } from "./math.js"; // can use any other name for the default value, have to write the exact names for other exports, also must be wrapped in curly braces

ReactDOM.render(
  <ul>
    <li>{pie}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

/*
 // can also use * (import All) this wild card imports every thing as an object from the math.js module, (discouraged because we lose the benefit of having a single default export)


import * as pie from "./math.js";
console.log(pie);

ReactDOM.render(
  <ul>
    <li>{pie.default}</li>
    <li>{pie.doublePi()}</li>
    <li>{pie.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);*/
