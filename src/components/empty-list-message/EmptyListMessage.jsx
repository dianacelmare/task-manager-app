import React from "react";
import tasksIcon from "../../assets/icons/tasks-icon.png";
import "./EmptyListMessage.css";
import Button from "../common/button/Button";

const EmptyListMessage = (props) => {
  return (
    <div className="empty-list-container">
      <div className="empty-list-message">
        <img className="tasks-logo" src={tasksIcon} alt="icon" />
        <h3 className="view-title">No Tasks Yet</h3>
        <p className="description">
          You have no task created in your workspace yet. <br />
          Get productive. Create a Task Now.
        </p>

        <Button onClick={() => props.onCreateTaskClick(true)} />
      </div>
    </div>
  );
};

export default EmptyListMessage;
