import React from "react";
import Task from'./Task';

import { useState } from "react";

function TaskList({TASKS}) {

  const [tasks, setTasks] = useState(TASKS);
console.log(tasks);

function handleDelete (text) {
  
  console.log(text)
  setTasks(tasks.filter((task)=>task.text !== text))

}


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index)=>{
        return (
          <Task key={index} text={task.text} category={task.category} handleDelete={handleDelete} />
        )
      })}
      
    </div>
  );
}

export default TaskList;
