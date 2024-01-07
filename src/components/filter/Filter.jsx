import React, { useState } from "react";
import "./Filter.css";

const Filter = (props) => {
  const tasksCount = (array, value) => {
    let count = 0;
    array.forEach((v) => v.status === value && count++);
    return count;
  };

  const [activeButton, setActiveButton] = useState(null);

  //When a button is clicked, handleButtonClick(index) is called with the 
  //index of that button/label in the case of the All Tasks button care are index undefined
  const handleButtonClick = (label, index) => {
    //handle both cases
    if (index === undefined) {
      setActiveButton(label); // Set the active button based on the LABEL of the button that was clicked(in this case only 'All Tasks' button)
    } else {
      setActiveButton(index);//set the active button based on the INDEX of the button
    }

    //handle the filter
    if (label === "All Tasks") {
      props.setTaskData(props.data); // Handle 'All Tasks' case filter
    } else {
      props.filterCards(label); // Handle other cases filter
    }
    // console.log("Label:", label);
    // console.log("Index:", index);
  };

  return (
    <>
      <div className="filter-container underline-indicators ">
        <button
          // onClick={() => props.setTaskData(props.data)}
          className={activeButton === "All Tasks" ? "active" : ""}
          onClick={() => handleButtonClick("All Tasks")}
        >
          All Tasks
          <span className="tasks-count">{props.data.length}</span>
        </button>
        {props.cardStatus.map((label, index) => {
          //the index represents the position of each 'label' within props.cardStatus
          return (
            <button
              key={index} //key is a React requirement for lists
              className={activeButton === index ? "active" : ""}
              //daca apelez handleButtonClick de index in loc de label active-statul merge dar nu mai sunt filtrate
              onClick={() => handleButtonClick(label, index)}
            >
              {label}
              <span className="tasks-count">
                {tasksCount(props.data, label)}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Filter;

// const handleButtonClick = (label, clickedIndex) => {
//   setActiveButton(clickedIndex); // Set the active button based on index of the button that was clicked
//   if (label === 'All') {
//     props.setTaskData(props.data); // Handle 'All Tasks' case
//   } else {
//     props.filterCards(label); // Handle other cases
//   }
// };
