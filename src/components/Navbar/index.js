import React from "react";
import "./index.css";

export default function Navbar({ setShowModel }) {
  return (
    <nav>
      <div className="container">
        <h1>logo</h1>
        <ul>
          <li>Home</li>
          <li>Posts</li>
          <li onClick={() => setShowModel(true)}>Sign In</li>
        </ul>
      </div>
    </nav>
  );
}
