import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  title: string;
  description: string;
}

interface TodoFormProps {
  onAddOrUpdateTask: (data: IFormInput) => void;
  editingTask: { title: string; description: string } | null;
  isEditing: boolean; // Track if we are editing a task
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddOrUpdateTask, editingTask, isEditing }) => {
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<IFormInput>();

  // Pre-fill the form when editing a task
  useEffect(() => {
    if (editingTask) {
      setValue("title", editingTask.title);
      setValue("description", editingTask.description);
    }
  }, [editingTask, setValue]);

  
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    onAddOrUpdateTask(data); // Add new TASK or update the task

    
    reset(); // Clear the input fields after adding or updating a task
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "500px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "16px" }}>
        {isEditing ? "Update Task" : "Add Task"}
      </h3>

      <label style={{ fontWeight: "bold" }} htmlFor="title">
        Title
      </label>
      <input
        id="title"
        type="text"
        {...register("title", { required: "Title is required" })}
        style={{
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      {errors.title && <span style={{ color: "red" }}>{errors.title.message}</span>}

      <label style={{ fontWeight: "bold" }} htmlFor="description">
        Description
      </label>
      <textarea
        id="description"
        {...register("description", { required: "Description is required" })}
        style={{
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          height: "80px",
        }}
      />
      {errors.description && <span style={{ color: "red" }}>{errors.description.message}</span>}

      <button
        type="submit"
        style={{
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "#FFF",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {isEditing ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TodoForm;
