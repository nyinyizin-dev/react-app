import { useState } from "react";
import "./App.css";

function App() {
  let [name, setName] = useState("ko ko");

  let changeName = () => {
    setName("nyi nyi");
    console.log(name);
  };

  return (
    <div className="app">
      <h1>Hello : {name}</h1>
      <button onClick={changeName}>change name</button>
    </div>
  );
}

export default App;
