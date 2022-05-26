import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import UseEffect from "./components/UseEffect";

function App() {
  fetch("http://localhost:8025/jai")
    .then((r) => r.json())
    .then((d) => {
      console.log(d);
    });
  const [count, setCount] = useState(0);

  useEffect(() => {}, [count]);
  return (
    <div className="App">
      {/* Make your Todos here:{count} */}
      {/* <Todo /> */}
      <UseEffect />
    </div>
  );
}

export default App;
