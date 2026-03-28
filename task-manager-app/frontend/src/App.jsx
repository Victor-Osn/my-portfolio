import "./Styles/app.css";
import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState("");

    // Load tasks from the backend when the app starts
    useEffect(() => {
        fetchTasks();
    }, []);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage("");
            }, 3000);
    
            return () => clearTimeout(timer);
        }
    }, [message]);

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
            setMessage("Task added successfully");
        } catch (error) {
            console.error("Error adding task:", error);
            setMessage("Failed to add task");
        }

    };

    // Toggle a task's completed status
    const toggleTask = async (taskId) => {
        try {
            const response = await axios.put(`http://localhost:5000/tasks/${taskId}`);
    
            setTasks(
                tasks.map((task) =>
                    task.id === taskId ? response.data : task
                )
            );
    
            setMessage("Task updated successfully");
        } catch (error) {
            console.error("Error updating task:", error);
            setMessage("Failed to update task");
        }
    };

    const deleteTask = async (taskId) => {
        try {
            await axios.delete(`http://localhost:5000/tasks/${taskId}`);
            setTasks(tasks.filter((task) => task.id !== taskId));
            setMessage("Task deleted successfully");
        } catch (error) {
            console.error("Error deleting task:", error);
            setMessage("Failed to delete task");
        }
    };

    return (
        <div className="app-container">
            <h1>Task Manager App</h1>
            {message && <p className="message">{message}</p>}

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
