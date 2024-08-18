import React from "react";

function Task({ text, category, onDelete }) {
  return (
    <div className="task">
     <div className="text">{text}</div>
      <div className="category">{category}</div>
      <button onClick={onDelete}>X</button>
    </div>
  );
}

export default Task;