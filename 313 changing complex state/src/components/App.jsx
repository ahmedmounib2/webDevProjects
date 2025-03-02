import React, { useState } from "react";

// function App() {
//   const [fname, setFirstName] = useState("");
//   const [lname, setLastName] = useState("");

//   function handleFnameChange(event) {
//     //console.log(event.target.value);
//     const newValue = event.target.value;
//     setFirstName(newValue);
//   }

//   function handleLnameChange(event) {
//     const newValue = event.target.value;
//     setLastName(newValue);
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {fname} {lname}
//       </h1>
//       <form>
//         <input
//           name="fName"
//           placeholder="First Name"
//           onChange={handleFnameChange}
//           value={fname}
//         />
//         <input
//           name="lName"
//           placeholder="Last Name"
//           onChange={handleLnameChange}
//           value={lname}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    //console.log(event.target.value);

    //const newValue = event.target.value;
    //const name = event.target.name;

    const { name, value } = event.target;
    console.log(value);
    console.log(name);

    setFullName((prevValue) => {
      //console.log(prevValue);
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
