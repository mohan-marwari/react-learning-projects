import React, { useState } from "react";

function TaskInput({ onAddTask }) {
  const [newTask, setNewTask] = useState(""); // State for input field

  const handleAddTask = () => {
    onAddTask(newTask);
    setNewTask(""); // Clear input field
  };

  return (
    <div style={styles.inputContainer}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task..."
        style={styles.input}
      />
      <button onClick={handleAddTask} style={styles.addButton}>
        Add
      </button>
    </div>
  );
}

const styles = {
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default TaskInput;
