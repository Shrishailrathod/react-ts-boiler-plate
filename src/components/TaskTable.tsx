import React from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface Task {
  title: string;
  description: string;
}

interface TaskTableProps {
  tasks: Task[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
}

const TaskTable: React.FC<TaskTableProps> = ({ tasks, onDelete, onEdit }) => {
  return (
    <table
      style={{
        width: "800px",
        borderCollapse: "collapse",
        border: "1px solid #ccc",
        backgroundColor: "#fff",
        marginTop: "20px", // Space between form and table
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#f2f2f2", textAlign: "left" }}>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>#</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Title</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Description</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{index + 1}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{task.title}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{task.description}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <IconButton onClick={() => onEdit(index)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => onDelete(index)}>
                <DeleteIcon />
              </IconButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
