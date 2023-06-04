import { useState } from "react";

import "./App.css";
import { cssObj } from "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className={cssObj.container}>
      <h2>Better Storage Approach</h2>
    </main>
  );
}

export default App;
