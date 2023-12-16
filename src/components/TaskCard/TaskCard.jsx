import "./TaskCard.css";

const TaskCard = (props) => {
  return (
    <div className="task-container">
      <div className="taskHeader">
        <p className="id">{props.id}</p>
        <p className="status">{props.status}</p>
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
