import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]); // State for Storing Tasks
  const [newTasks, setNewTasks] = useState(""); // State for Input Filed

  // Function to add a new task
  const addTask = () => {
    setTasks([...tasks, {text: newTasks, completed: false}]);
    setNewTasks("");
  };

  return (
    <>
      <h1>To-Do List App</h1>
      {/* Input and Add Button */}
      <div>
        <input
          type="text"
          value={newTasks}
          onChange={(event) => setNewTasks(event.target.value)}
          placeholder="Enter a new task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      {/* Task List */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
