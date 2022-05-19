import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {

  const [category, setCategory] = useState("All");
  const [displayTasks, setDisplayTasks] = useState(TASKS);
  
  const handleFilter = (category) => {
      setCategory(category)
  }

  const handleNewTaskFormSubmit = (formData) => {
    setDisplayTasks([...displayTasks, formData])
  }

  const handleDelete = (text) => {
      const newDisplayTasks = displayTasks.filter((task) => task.text !== text)
      setDisplayTasks(newDisplayTasks);
  } 

  const newDisplayTasks = displayTasks.filter((task) => {
     if (category === "All") {
          return true;
     } else {
          return category === task.category
     }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilter={handleFilter} category={category} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTaskFormSubmit} />
      <TaskList tasks={newDisplayTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
