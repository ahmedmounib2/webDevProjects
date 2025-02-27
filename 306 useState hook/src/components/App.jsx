import React, { useState } from "react";
/*
function App() {
  const state = useState(123);


  //const rgb = [18, 137, 167];
 // console.log(rgb[0]);

  //console.log(state);
  console.log(state[0]);
  function increase() {
    //count++;
    //console.log(count);
  }

  return (
    <div className="container">
      <h1>{state[0]}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
} */

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
