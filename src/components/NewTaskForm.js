import React, {useState} from "react";

function NewTaskForm( {categories, onTaskFormSubmit} ) {

  const [textValue, setTextValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("Code")


  const selectElements = categories.map((category, index) => {
      if (category !== "All") {
          return <option key={index} value={category}>{category}</option>
      } else {
          return null;
      }   
  })    

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  }

  const handleCategoryChange = (event) => {
    console.log('evt = ', event.target.value)
    setCategoryValue(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {text: textValue, category: categoryValue}
    onTaskFormSubmit(formData);
    setTextValue("");
    setCategoryValue("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={textValue} onChange={handleTextChange} required />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {selectElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
