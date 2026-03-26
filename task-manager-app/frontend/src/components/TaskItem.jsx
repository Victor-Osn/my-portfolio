function TaskItem({ task, onToggleTask, onDeleteTask }) {
    return (
        <div>
            <p>
                <span
                    style={{
                        textDecoration: task.completed ? "line-through" : "none",
                        marginRight: "10px"
                    }}
                >
                    {task.text}
                </span>
                <button onClick={() => onToggleTask(task.id)}>
                    {task.completed ? "Undo" : "Complete"}
                </button>
                <button onClick={() => onDeleteTask(task.id)} style={{ marginLeft: "10px" }}>
                    Delete
                </button>
            </p>
        </div>
    );
}

export default TaskItem;
