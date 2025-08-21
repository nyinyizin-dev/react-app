import "./App.css";
import Image from "./assests/img-1.jpg";

function App() {
  let name = "nyi nyi";

  return (
    <div className="App">
      <h1>hello : {name}</h1>
      {/* 1- public folder way */}

      {/* realtive path */}
      {/* <img src="/img-1.jpg" alt="" /> */}
      {/* absolute path */}
      {/* <img src="http://localhost:3000/img-1.jpg" alt="" /> */}

      {/* 2- import way */}
      <img src={Image} alt="" />
    </div>
  );
}

export default App;
