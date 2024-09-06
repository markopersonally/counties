import { useState } from "react";
import Countries from "./components/Countries";
import SelectCapital from "./components/SelectCapital";
import "./App.css";

function App() {
  const [selectedCapital, setSelectedCapital] = useState("");

  return (
    <>
      <SelectCapital setSelectedCapital={setSelectedCapital} />
      <Countries selectedCapital={selectedCapital} />
    </>
  );
}

export default App;
