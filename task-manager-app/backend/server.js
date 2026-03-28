import express from "express";
import cors from "cors";

// Create the Express app
const app = express();

// Set the port number for the backend server
const PORT = 5000;

// Allow requests from the frontend
app.use(cors());

// Allow JSON data in request bodies
app.use(express.json());

// Temporary in-memory task list for Version 1
let tasks = [
    { id: 1, text: "Finish backend setup", completed: false },
    { id: 2, text: "Connect frontend to backend", completed: false }
];

// GET all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// POST a new task
app.post("/tasks", (req, res) => {
    const newTask = {
        id: Date.now(), // Generate a simple unique ID
        text: req.body.text,
        completed: false
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PUT to toggle a task's completed status
app.put("/tasks/:id", (req, res) => {
    const taskId = Number(req.params.id);

    tasks = tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    const updatedTask = tasks.find((task) => task.id === taskId);
    res.json(updatedTask);
});

// DELETE a task by ID
app.delete("/tasks/:id", (req, res) => {
    const taskId = Number(req.params.id);
    tasks = tasks.filter((task) => task.id !== taskId);
    res.json({ message: "Task deleted successfully" });
});

// Start the backend server
app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});
