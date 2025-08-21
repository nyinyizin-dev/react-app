import React, { useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);

  let increment = () => {
    setCount((pre)=>pre+1);
    setCount((pre)=>pre+1);
    setCount((pre)=>pre+1);
    setCount((pre)=>pre+1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <p>count - {count}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
}
