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
        <Modal setShowModel={setShowModel}>
          <PostForm />
       
        </Modal>
      )}
    </>
  );
}

export default App;
