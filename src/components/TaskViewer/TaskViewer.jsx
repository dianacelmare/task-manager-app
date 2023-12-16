import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskViewer.css"

const TaskViewer = (props) => {
  // console.log("Task viewer props:",props.dataFields)
  return (
    <>
      {/* <h1>Task Manager</h1> */}
      <div className="viewer-container">
        {props.dataFields.map((item, index) => (
          <TaskCard
            key={index}
            id={item.id}
            status={item.status}
            description={item.description}
            dueDate={item.dueDate}
          />
        ))}
      </div>
    </>
  );
};

export default TaskViewer;
