import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {

  const liItems = tasks.map((task, index) => {
     return (<Task key={index} text={task.text} category={task.category} handleDelete={handleDelete} />)
  })

  return (
    <div className="tasks">
      {liItems}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
