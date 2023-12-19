//https://www.figma.com/file/04L1wcqOHZHW2cSVk5z0MP/Untitled?type=design&node-id=0-1&mode=design&t=ROqiwmWnFZtLrt5z-0
import logo from "./logo.svg";
import "./App.css";
import TaskViewer from "./components/TaskViewer/TaskViewer";
import React, { useState } from "react";

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
const App = () => {
  const [taskData, setTaskData] = useState(data);
  const onAddTask = (newTask) => {
    console.log("Task adaugat din App.jsx: ", newTask);
    setTaskData((prevState) => [
      ...prevState,
      {
        ...newTask,
        id: `T-${prevState.length + 1}`,
        dueDate: new Date(newTask.dueDate),
      },
    ]);
  };
  return (
    <div className="page-container">
      {/* Primit din copil(TaskViewer) si acum apelam functa onAddTask */}
      <TaskViewer dataFields={taskData} addTask={onAddTask}/>     
    </div>
  );
};

export default App;
