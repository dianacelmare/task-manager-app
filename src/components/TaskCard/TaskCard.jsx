import React from "react";
import "./TaskCard.css";
import Badge from "../common/badge/Badge";

const TaskCard = (props) => {
  const styleBadge = () => {
    switch (props.status) {
      case "Todo":
        return "grey";
      case "Completed":
        return "green";
      case "In progress":
        return "blue";
      case "Pending":
        return "yellow";
      default:
        return "grey";
    }
  };
  return (
    <div className="task-container">
      <div className="taskHeader">
        <p className="id">{props.id}</p>
        <Badge status={props.status} color={styleBadge()} />
      </div>
      <div className="taskContent">{props.description}</div>
      <div className="taskFooter">
        <p className="dueDateLabel">Due Date</p>
        <p className="dueDate">{props.dueDate.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default TaskCard;
