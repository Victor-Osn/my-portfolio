import TaskItem from "./TaskItem";

function TaskList() {
  return (
    <div>
      <h2>Task List</h2>
      <p>This component will display all tasks.</p>

      {/* Temporary sample task item */}
      <TaskItem />
    </div>
  );
}

export default TaskList;
