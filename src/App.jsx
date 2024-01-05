//https://www.figma.com/file/04L1wcqOHZHW2cSVk5z0MP/Untitled?type=design&node-id=0-1&mode=design&t=ROqiwmWnFZtLrt5z-0
import "./App.css";
import TaskViewer from "./components/TaskViewer/TaskViewer";
import React, { useState } from "react";

const data = [
  {
    id: "T-1",
    status: "Todo",
    description: "Finish Task Manager App",
    dueDate: new Date(2021, 5, 24),
  },
  {
    id: "T-2",
    status: "Completed",
    description: "Add Filter to Task Manager App",
    dueDate: new Date(2025, 5, 24),
  },
  {
    id: "T-3",
    status: "In progress",
    description: "Responsiveness for the App",
    dueDate: new Date(2023, 8, 24),
  },
  {
    id: "T-4",
    status: "Pending",
    description: "Create Task Button",
    dueDate: new Date(2023, 8, 24),
  },
  {
    id: "T-5",
    status: "Todo",
    description: "Start Tailwind App",
    dueDate: new Date(2021, 5, 24),
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
    data.push(newTask);
  };

  //Spread operator will display all the values from our category section of our data while
  //Set will only allow the single value of each kind to be displayed
  const cardStatus = [...new Set(data.map((val) => val.status))];
  // console.log(cardStatus[1]);
  console.log(cardStatus);

  //curstat= current status
  const filterCards = (curstat) => {
    const newCard = data.filter((newVal) => {
      return newVal.status === curstat;
      // comparing status for displaying data
    });
    setTaskData(newCard);
  };

  return (
    <div className="page-container">
      {/* Primit din copil(TaskViewer) si acum apelam functa onAddTask */}
      <TaskViewer
        dataFields={taskData}
        setTaskData={setTaskData}
        addTask={onAddTask}
        cardStatus={cardStatus}
        filterCards={filterCards}
      />
    </div>
  );
};

export default App;
