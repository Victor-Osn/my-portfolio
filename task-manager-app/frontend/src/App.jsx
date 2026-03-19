import "./Styles/app.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <h1>Task Manager App</h1>
      <p>Version 1 frontend setup in progress.</p>

      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
