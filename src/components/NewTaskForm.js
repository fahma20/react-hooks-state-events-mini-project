import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[1] || "");

  const handleTextChange = (event) => setTaskText(event.target.value);

  const handleCategoryChange = (event) => setTaskCategory(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      text: taskText,
      category: taskCategory,
    };
    onTaskFormSubmit(newTask);
    setTaskText("");
    setTaskCategory(categories[1] || "");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={handleTextChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskCategory}
          onChange={handleCategoryChange}
        >
          {categories
            .filter((category) => category !== "All")
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;