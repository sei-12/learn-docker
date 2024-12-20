import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.text())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>React + Express + MySQL</h1>
      <p>Server Time: {data ? data : "Loading..."}</p>
    </div>
  );
}

export default App;