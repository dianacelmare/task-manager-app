//https://www.figma.com/file/04L1wcqOHZHW2cSVk5z0MP/Untitled?type=design&node-id=0-1&mode=design&t=ROqiwmWnFZtLrt5z-0
import logo from "./logo.svg";
import "./App.css";
import TaskCard from "./components/TaskCard/TaskCard";
import TaskViewer from "./components/TaskViewer/TaskViewer";
import CreateTaskForm from "./components/CreateTaskForm/CreateTaskForm";
import React from "react";
//function App(){}
const App = () => {
  const data = [
    {
      id: "T-1",
      status: "Todo",
      description: " Create a Design System for Enum Workspace",
      dueDate: new Date(2021, 5, 24),
    },
    {
      id: "T-2",
      status: "Complete",
      description: "Design System for Enum Workspace",
      dueDate: new Date(2025, 5, 24),
    },
    {
      id: "T-3",
      status: "In progress",
      description: "Enum Workspace",
      dueDate: new Date(2023, 8, 24),
    },
  ];


  return (
    <div className="page-container">
      <TaskViewer dataFields={data} />
      <div className="form-container">
        <h2>Create Task</h2>
        <CreateTaskForm />
      </div>
    </div>
  );
};

export default App;
