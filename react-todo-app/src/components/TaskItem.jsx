import React from "react";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li style={styles.listItem}>
      <span
        onClick={onToggle}
        style={{
          ...styles.taskText,
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "green" : "white",
        }}
      >
        {task.text}
      </span>
      <button onClick={onDelete} style={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
}

const styles = {
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  taskText: {
    cursor: "pointer",
    fontSize: "1rem",
    textTransform: "capitalize",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default TaskItem;
