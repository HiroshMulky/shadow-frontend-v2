import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    const res = await fetch("/api/shadow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    });
    const data = await res.json();
    setResponse(data.output);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>SHADOW Control Panel</h1>
      <textarea
        placeholder="Enter your command..."
        rows={4}
        style={{ width: "100%", marginBottom: 10 }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <button onClick={handleSend}>Send</button>
      <pre style={{ marginTop: 20 }}>{response}</pre>
    </div>
  );
}

export default App;