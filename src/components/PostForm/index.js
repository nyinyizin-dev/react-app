import { useState } from "react";
import "./index.css";

export default function PostForm({ addPost }) {
  let [title, setTitle] = useState("");

  let resetForm = () => {
    setTitle("");
    console.log("updated successfully");
  };

  let upload_post = (e) => {
    e.preventDefault();
    let post = {
      id: Math.floor(Math.random() * 10000),
      title,
    };
    resetForm();
   console.log(post);
    addPost(post);
  };

  return (
    <form className="post-form" onSubmit={upload_post}>
      <h1>creat post</h1>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>

      <div className="form-control">
        <button>Post now</button>
      </div>
    </form>
  );
}
