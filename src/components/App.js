import React, { useState } from "react";

function App(props) {
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
