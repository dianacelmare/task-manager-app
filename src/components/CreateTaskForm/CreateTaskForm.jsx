import React, { useState } from "react";
import "./CreateTaskForm.css";
import Button from "../common/button/Button";

const CreateTaskForm = (props) => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleTaskName = (event) => {
    setTaskName(event.target.value);
  };
  const handleTaskDate = (event) => {
    setTaskDate(event.target.value);
  };
  const handleTaskDescription = (event) => {
    setTaskDescription(event.target.value);
  };
  const resetState = () => {
    setTaskName("");
    setTaskDate("");
    setTaskDescription("");
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();

    const newTask = {
      name: taskName,
      dueDate: taskDate,
      description: taskDescription,
      status: "Todo",
    };
    // trimitem prin props catre parinte(bottom-up method)
    props.addTask(newTask);

    console.log("Task adaugat din CreateTaskForm.jsx: ", newTask);
    resetState();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="form-row">
        <label htmlFor="taskName">Task Name</label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={handleTaskName}
        />
      </div>
      <div className="form-row">
        <label htmlFor="taskDate">Task Name</label>
        <input
          type="date"
          id="taskDate"
          value={taskDate}
          onChange={handleTaskDate}
        />
      </div>
      <div className="form-row">
        <label htmlFor="taskDescription">Task Description</label>
        <textarea
          id="taskDescription"
          rows="4"
          cols="50"
          value={taskDescription}
          onChange={handleTaskDescription}
        />
      </div>
      <Button></Button>
    </form>
  );
};

export default CreateTaskForm;
