import React from "react";
import { useState } from "react";

// function App() {
//   const [headingText, setHeadingText] = useState("Hello!!");

//   const [color, setColor] = useState({ backgroundColor: "white" });

//   function handleClick() {
//     setHeadingText("Submitted");
//   }

//   function blackButton() {
//     setColor({ backgroundColor: "black" });
//   }

//   function whiteButton() {
//     setColor({ backgroundColor: "white" });
//   }

//   return (
//     <div className="container">
//       <h1>{headingText}</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button
//         onClick={handleClick}
//         onMouseOver={blackButton}
//         onMouseOut={whiteButton}
//         style={color}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

function App() {
  const [headingText, setHeadingText] = useState("Hello!!");

  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    console.log("moused over");
    setMouseOver(true);
  }

  function handelMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handelMouseOut}
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
