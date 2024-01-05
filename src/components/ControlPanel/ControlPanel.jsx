import React, { useState } from "react";
import Button from "../common/button/Button";
import Filter from "../filter/Filter";
import "./ControlPanel.css";
import Modal from "../modal/Modal";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";

const ControlPanel = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleNewTaskAdd = (task) => {
    props.addTask(task);
    setIsOpen(false);
  };

  const [allTasks, setAllTasks] = useState(props.dataFields); // Contains all tasks

  return (
    <>
      <div className="panel-container">
        <div className="text-container">
          <h3 className="title">Tasks</h3>
          <p className="subtitle">Your tasks in your space.</p>
          <Filter
            setTaskData={props.setTaskData}
            cardStatus={props.cardStatus}
            filterCards={props.filterCards}
            data={allTasks} 
          />
        </div>
        <div>
          <Button onClick={openModal} />
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="form-container">
          <h2>Create Task</h2>
          {/* venit prin props din copil(CreateTaskForm) si trimitem mai departe catre parinte(TaskViewer) */}
          <CreateTaskForm addTask={handleNewTaskAdd} />
        </div>
      </Modal>
    </>
  );
};

export default ControlPanel;
