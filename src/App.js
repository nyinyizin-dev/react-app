import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import Modal from "./components/Modal/index";
import PostForm from "./components/PostForm";

function App() {
  let [showModel, setShowModel] = useState(false);
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "First post",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Second post",
      status: "ongoing",
    },
  ]);

  let addPost = (post) => {
    setPosts((pre) => [...pre, post]);
    setShowModel(false);
  };

  return (
    <>
      <Navbar setShowModel={setShowModel} />
      <PostList posts={posts} />
      {showModel && (
        <Modal setShowModel={setShowModel}>
          <PostForm addPost={addPost} />
        </Modal>
      )}
    </>
  );
}

export default App;
