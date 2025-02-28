import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", { hour12: false })
  );
  //console.log(time);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    setTime(newTime);
  }
  //setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
