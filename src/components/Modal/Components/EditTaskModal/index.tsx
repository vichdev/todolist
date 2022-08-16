import React, { useEffect, useState } from "react";
import { useTask } from "../../../../context/TaskContext";
import { IUpdateTask } from "../../../../models/ITaskContext";
import { ITasks } from "../../../../models/ITasks";
import SelectInputs from "../../../Select";
import { IPropsEditTask } from "./interfaces/IPropsEditTask";

import * as Styles from "./styles";

const EditTaskModal: React.FC<IPropsEditTask> = ({ task }) => {
  const {
    editTask,
    updateTask,
    setDisplayEditTaskModal,
    displayEditTaskModal,
  } = useTask();
  const [editName, setEditName] = useState<string>(task.name);
  const [editDescription, setEditDescription] = useState<string>(
    task.description
  );
  const [editPriority, setEditPriority] = useState<number>(0);
  const [editStatus, setEditStatus] = useState<number>(0);

  function handleUpdateTask(): void {
    const taskEdited = {
      name: editName,
      description: editDescription,
      priority: editPriority,
      status: editStatus,
    };
    updateTask(editTask.id, taskEdited);
    console.log(editName.length);
    setDisplayEditTaskModal(!displayEditTaskModal);
  }

  return (
    <Styles.AddTaskForm>
      <Styles.FormContainer>
        <Styles.AddTaskInputsWrapper>
          <Styles.AddTaskLabel>Name *</Styles.AddTaskLabel>
          <Styles.AddTaskInputs
            type={"text"}
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
        </Styles.AddTaskInputsWrapper>
        <Styles.AddTaskInputsWrapper>
          <Styles.AddTaskLabel>Description *</Styles.AddTaskLabel>
          <Styles.AddTaskInputs
            type={"text"}
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
        </Styles.AddTaskInputsWrapper>
        <Styles.SwitchWrapper>
          <SelectInputs
            state={editPriority}
            stateController={setEditPriority}
            typePriority
          />
          <SelectInputs
            state={editStatus}
            stateController={setEditStatus}
            typePriority={false}
          />
        </Styles.SwitchWrapper>
      </Styles.FormContainer>
      <Styles.ButtonWrapper>
        <Styles.EditTaskButton
          title="Edit task"
          bgColor="var(--green)"
          color="white"
          borderColor="black"
          onClick={() => {
            handleUpdateTask();
          }}
        >
          Edit task
        </Styles.EditTaskButton>
      </Styles.ButtonWrapper>
    </Styles.AddTaskForm>
  );
};

export default EditTaskModal;
