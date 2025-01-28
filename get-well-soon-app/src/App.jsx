import { useState } from "react";
import "./App.css";
import { GetWellSoon } from "./pages/GetWellSoon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GetWellSoon />
    </>
  );
}

export default App;
