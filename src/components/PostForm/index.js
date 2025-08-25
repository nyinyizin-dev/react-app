import { useState } from "react";
import "./index.css";

export default function PostForm({ addPost }) {
  let [title, setTitle] = useState("");
  let [status, setStatus] = useState("upcoming");

  let resetForm = () => {
    setTitle("");
    console.log("updated successfully");
  };

  let upload_post = (e) => {
    e.preventDefault();
    let post = {
      id: Math.floor(Math.random() * 10000),
      title,
      status
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
        <label htmlFor="">Status</label>
        <select
          name=""
          id=""
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="dropped">Dropped</option>
          <option value="ongoing">Ongoing</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>

      <div className="form-control">
        <button>Post now</button>
      </div>
    </form>
  );
}
