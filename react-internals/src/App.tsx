import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showText && <p>This is some conditional text</p>}
      <Button onClick={() => setShowText((prevValue) => !prevValue)}>
        Show/Hide
      </Button>
    </div>
  );
}

export default App;
