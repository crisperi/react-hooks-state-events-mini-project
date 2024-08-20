import React from "react";

function Task({text, category, handleDelete}) {

function Delete(text) {
  handleDelete(text)
  
}

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() =>Delete(text) }>X</button>
    </div>
  );
}

export default Task;
