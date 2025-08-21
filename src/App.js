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
  console.log(posts);

  let changeName = () => {
    setName("nyi nyi");
    console.log(name);
  };

  let deletePost = (id) => {
    setPosts((pre) => pre.filter((post) => post.id !== id));
  };

  return (
    <div className="app">
      <h1>Hello : {name}</h1>
      <button onClick={changeName}>change name</button>

      <h1>Posts</h1>
      <ul>
        {!!posts.length &&
          posts.map((post) => (
            <li key={post.id}>
              {post.title}
              <button onClick={() => deletePost(post.id)}>delete</button>
            </li>
          ))}
        {!posts.length && <p>No posts available. </p>}
      </ul>
    </div>
  );
}

export default App;
