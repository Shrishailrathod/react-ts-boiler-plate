import  { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm"; 
import TaskTable from "./components/TaskTable"; 


const App = () => {
  // Load tasks from localStorage or default to an empty array
  const loadTasksFromLocalStorage = (): { title: string; description: string }[] => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  };

  const [tasks, setTasks] = useState<{ title: string; description: string }[]>(loadTasksFromLocalStorage());
  const [editingTaskIndex, setEditingTaskIndex] = useState<number | null>(null);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Handle adding a new task or updating an existing task
  const handleAddOrUpdateTask = (task: { title: string; description: string }) => {
    if (editingTaskIndex !== null) {
      
      // Update task logic
      const updatedTasks = [...tasks];
      updatedTasks[editingTaskIndex] = task;
      setTasks(updatedTasks);
      setEditingTaskIndex(null); // Reset editing state after update
    } else {
      // Add new task
      setTasks([...tasks, task]);
    }
  };

  // Handle deleting a task
  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Handle editing a task
  const handleEditTask = (index: number) => {
    setEditingTaskIndex(index);
  };

  return (
    <>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5f5f5",
        boxSizing: "border-box",
      }}
    >
      {/* Pass handleAddOrUpdateTask and reset the form */}
      <TodoForm
        onAddOrUpdateTask={handleAddOrUpdateTask}
        editingTask={tasks[editingTaskIndex ?? -1]} // Send editing task if any
        isEditing={editingTaskIndex !== null} // Track if we are editing a task
      />

      {/* Task Table */}
      <TaskTable
        tasks={tasks}
        onDelete={handleDeleteTask}
        onEdit={handleEditTask}
      />
    </div>
    </>
  );
};

export default App;
