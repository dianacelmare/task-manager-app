// import React, { useState } from "react";
import "./Filter.css";

const Filter = (props) => {
  
  const tasksCount = (array, value) => {
    let count = 0;
    array.forEach((v) => v.status === value && count++);
    return count;
  };

  // console.log("props:",props.dataFields[0].status);
  return (
    <>
      <div className="filter-container underline-indicators ">
        <button onClick={() => props.setTaskData(props.data)}>
          All Tasks {console.log(props.data)}
          <span className="tasks-count">{props.data.length}</span>
        </button>
        {props.cardStatus.map((val, id) => {
          return (
            <button onClick={() => props.filterCards(val)} key={id}>
              {val}
              <span className="tasks-count">
                {tasksCount(props.data, val)}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Filter;

// const countTasks=()=>{

// }

// const [isAllTasksActive, setIsAllTasksActive] = useState(false);
// const [isPendingActive, setIsPendingActive] = useState(false);
// const [isInProgressActive, setIsInProgressActive] = useState(false);
// const [isCompletedActive, setIsCompletedActive] = useState(false);
// const handleAllTasksTab = (event) => {
//   setIsAllTasksActive((current) => !current);
// };
// const handlePendingTab = (event) => {
//   setIsPendingActive((current) => !current);
// };
// const handleInProgresssTab = (event) => {
//   setIsInProgressActive((current) => !current);
// };
// const handleCompletedTab = (event) => {
//   setIsCompletedActive((current) => !current);
// };
// return (
//   <div className="filter-container underline-indicators ">
//     <a
//       onClick={handleAllTasksTab}
//       className={isAllTasksActive ? "active" : ""}
//     >
//       All Tasks <span className="tasks-count">{props.dataFields.length}</span>{" "}
//     </a>
//     <a onClick={handlePendingTab} className={isPendingActive ? "active" : ""}>
//       Pending <span className="tasks-count">{props.dataFields.length}</span>
//     </a>
//     <a
//       onClick={handleInProgresssTab}
//       className={isInProgressActive ? "active" : ""}
//     >
//       In Progress
//       <span className="tasks-count">{props.dataFields.length}</span>
//     </a>
//     <a
//       onClick={handleCompletedTab}
//       className={isCompletedActive ? "active" : ""}
//     >
//       Completed <span className="tasks-count">{props.dataFields.length}</span>
//     </a>
//   </div>
// );
