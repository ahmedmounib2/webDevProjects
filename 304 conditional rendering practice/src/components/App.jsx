import React from "react";
import Form from "./Form";

var userIsReigstered = false;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsReigstered} />
    </div>
  );
}

export default App;
