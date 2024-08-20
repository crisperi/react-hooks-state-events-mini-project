
import Task from './Task';

function TaskList({ tasks = [], handleDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          handleDelete={() => handleDelete(task.text)}
        />
      ))}
    </div>
  );
}

export default TaskList;
