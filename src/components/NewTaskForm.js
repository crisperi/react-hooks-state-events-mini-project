import React, { useState } from "react";

function NewTaskForm({ categories = [], onTaskFormSubmit }) {
  const [text, setText] = useState("");
  // Removed the dependency on categories for initial state to avoid potential issues
  const [category, setCategory] = useState("");

  const handleTextChange = (e) => setText(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && category) {
      onTaskFormSubmit({ text, category });
      setText("");
      setCategory(""); // No need to reset to the first category after submission
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task details"
        value={text}
        onChange={handleTextChange}
      />
      <select value={category} onChange={handleCategoryChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;