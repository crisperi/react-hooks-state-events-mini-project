import React from "react";

function Task({text, category, handleDelete}) {

function Delete(e,text) {
  e.preventDefault();
  handleDelete(text)
  
}

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={(e) =>Delete(e,text) }>X</button>
    </div>
  );
}

export default Task;
