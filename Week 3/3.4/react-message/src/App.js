import { useState } from "react";
import "./App.css";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [displayMessage, setDisplayMessage] = useState("Hello World");

  function handleDisplayMessage() {
    setDisplayMessage(inputMessage);
  }

  return (
    <div className="container">
      <h1>React Message Display</h1>

      <label htmlFor="messageInput">Message to Display</label>

      <input
        id="messageInput"
        type="text"
        value={inputMessage}
        onChange={(event) => setInputMessage(event.target.value)}
      />

      <button onClick={handleDisplayMessage}>
        Display Message
      </button>

      <h2>{displayMessage}</h2>
    </div>
  );
}

export default App;
