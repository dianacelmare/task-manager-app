import React, { useState } from "react";
import "./CreateTaskForm.css";

const CreateTaskForm = () => {
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

  return (
    <form>
      <div className="form-row">
        <label for="taskName">Task Name</label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={handleTaskName}
        />
      </div>
      <div className="form-row">
        <label for="taskDate">Task Name</label>
        <input
          type="date"
          id="taskDate"
          value={taskDate}
          onChange={handleTaskDate}
        />
      </div>
      <div className="form-row">
        <label for="taskDescription">Task Name</label>
        <textarea
          id="taskDescription"
          rows="4"
          cols="50"
          value={taskDescription}
          onChange={handleTaskDescription}
        />
      </div>
    </form>
  );
};

export default CreateTaskForm;
