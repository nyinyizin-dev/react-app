import { useState } from "react";
import "./index.css";

export default function PostForm() {
  let [title, setTitle] = useState("");

 let resetFrom = () => {
  setTitle('');
  console.log("updated successfully");
 }

  return (
    <form className="post-form">
      <h1>creat post</h1>
      <div className="form-control">
        <label>Title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
      </div>
      <p>{title}</p>
      <button type="button" onClick={resetFrom}>reset form</button>
      <div className="form-control">
        <button>Post now</button>
      </div>
    </form>
  );
}
