import { useState } from "react";

function TaskForm({ onAddTask }) {
    const [taskText, setTaskText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask(taskText);
        setTaskText("");
    };

    return (
    <form onSubmit={handleSubmit}>
        <h2>Add Task</h2>
        <input
            type="text"
            placeholder="Enter a task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            required
        />
        <br />
        <button type="submit">Add Task</button>
    </form>
);

export default TaskForm;
