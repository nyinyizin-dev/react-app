import { useState } from "react";
import "./App.css";

function App() {
  let [name, setName] = useState("ko ko");
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "First post",
    },
    {
      id: 2,
      title: "Second post",
    },
    {
      id: 3,
      title: "Third post",
    },
  ]);

  let changeName = () => {
    setName("nyi nyi");
    console.log(name);
  };

  return (
    <div className="app">
      <h1>Hello : {name}</h1>
      <button onClick={changeName}>change name</button>

      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
