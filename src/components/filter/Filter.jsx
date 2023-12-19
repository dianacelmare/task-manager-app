import React, { useState } from "react";
import "./Filter.css";
function Filter(props) {
  // const countTasks=()=>{

  // }

  const [isAllTasksActive, setIsAllTasksActive] = useState(false);
  const [isPendingActive, setIsPendingActive] = useState(false);
  const [isInProgressActive, setIsInProgressActive] = useState(false);
  const [isCompletedActive, setIsCompletedActive] = useState(false);

  const handleAllTasksTab = (event) => {
    setIsAllTasksActive((current) => !current);
  };
  const handlePendingTab = (event) => {
    setIsPendingActive((current) => !current);
  };
  const handleInProgresssTab = (event) => {
    setIsInProgressActive((current) => !current);
  };
  const handleCompletedTab = (event) => {
    setIsCompletedActive((current) => !current);
  };

  return (
    <div className="filter-container underline-indicators ">
      <a
        onClick={handleAllTasksTab}
        className={isAllTasksActive ? "active" : ""}
      >
        All Tasks <span className="tasks-count">{props.dataFields.length}</span>{" "}
      </a>
      <a onClick={handlePendingTab} className={isPendingActive ? "active" : ""}>
        Pending <span className="tasks-count">{props.dataFields.length}</span>
      </a>
      <a
        onClick={handleInProgresssTab}
        className={isInProgressActive ? "active" : ""}
      >
        In Progress
        <span className="tasks-count">{props.dataFields.length}</span>
      </a>
      <a
        onClick={handleCompletedTab}
        className={isCompletedActive ? "active" : ""}
      >
        Completed <span className="tasks-count">{props.dataFields.length}</span>
      </a>
    </div>
  );
}

export default Filter;
