import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      { id: Date.now(), text: task, completed: false },
    ]);

    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <h1>TaskBuddy</h1>
      <p>Your friendly task manager</p>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <h3>
        {tasks.filter((item) => item.completed).length} of {tasks.length} tasks completed
      </h3>

      <div className="task-list">
        {tasks.map((item) => (
          <div className="task" key={item.id}>
            <span
              onClick={() => toggleTask(item.id)}
              className={item.completed ? "completed" : ""}
            >
              {item.text}
            </span>

            <button onClick={() => deleteTask(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;