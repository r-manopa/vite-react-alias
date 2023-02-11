import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MyComponent from "@/components/MyComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
