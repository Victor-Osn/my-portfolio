import "./Styles/app.css";
import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Finish frontend setup", completed: false },
        { id: 2, text: "Build task form", completed: true }
    ]);

    const addTask = (taskText) => {
        if (!taskText.trim()) return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <h1>Task Manager App</h1>
            <p>Version 1 frontend setup in progress.</p>

            <TaskForm onAddTask={addTask} />
            <TaskList tasks={tasks} />
        </div>
    );
}

export default App;
