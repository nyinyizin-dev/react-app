import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import Modal from "./components/Modal/index";

function App() {
  let [showModel, setShowModel] = useState(false);
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

  return (
    <>
      <Navbar setShowModel={setShowModel} />
      <PostList posts={posts} />
      {showModel && (
        <Modal >
          <h1>Hello react</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quaerat enim tenetur, qui laboriosam quae vel sunt officiis animi
            amet doloribus suscipit beatae aliquid. Laudantium fugiat autem
            voluptate nesciunt nam!
          </p>
          <button onClick={() => setShowModel(false)}>close</button>
        </Modal>
      )}
    </>
  );
}

export default App;
