import React from "react";
import TaskItem from "./TaskItem"; // Import TaskItem component

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <ul style={styles.list}>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onToggle={() => onToggleTask(index)}
          onDelete={() => onDeleteTask(index)}
        />
      ))}
    </ul>
  );
}

const styles = {
  list: {
    listStyleType: "none",
    padding: 0,
  },
};

export default TaskList;
