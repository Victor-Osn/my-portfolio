import "./Styles/app.css";
import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
    // Stores all tasks from the backend
    const [tasks, setTasks] = useState([]);

    // Fetch tasks once when the app loads
    useEffect(() => {
        fetchTasks();
    }, []);

    // Get all tasks from the backend API
    const fetchTasks = async () => {
        try {
            const response = await axios.get("http://localhost:5000/tasks");
            setTasks(response.data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    // Add a new task to the backend, then update the frontend list
    const addTask = async (taskText) => {
        try {
            const response = await axios.post("http://localhost:5000/tasks", {
                text: taskText
            });

            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    // Toggle a task's completed status
    const toggleTask = async (taskId) => {
        try {
            const response = await axios.put(http://localhost:5000/tasks/${taskId});
            setTasks(
                tasks.map((task) =>
                    task.id === taskId ? response.data : task
                )
            );
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    // Delete a task from the backend and show a success or failure alert
    const deleteTask = async (taskId) => {
        try {
            await axios.delete(http://localhost:5000/tasks/${taskId});
            setTasks(tasks.filter((task) => task.id !== taskId));
            alert("Task deleted successfully");
        } catch (error) {
            console.error("Error deleting task:", error);
            alert("Failed to delete task");
        }
    };

    // Main app UI
    return (
        <div className="app-container">
            <h1>Task Manager App</h1>

            <TaskForm onAddTask={addTask} />
            <TaskList
                tasks={tasks}
                onToggleTask={toggleTask}
                onDeleteTask={deleteTask}
            />
        </div>
    );
}

export default App;
