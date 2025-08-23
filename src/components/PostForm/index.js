import { useState } from "react";
import "./index.css";

export default function PostForm() {
  let [title, setTitle] = useState("");

  return (
    <form className="post-form">
      <h1>creat post</h1>
      <div className="form-control">
        <label>Title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <p>{title}</p>

      <div className="form-control">
        <button>Post now</button>
      </div>
    </form>
  );
}
