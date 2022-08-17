import React, { useState } from "react";
import * as Styles from "./styles";
import { FaTrashAlt } from "react-icons/fa";
import { useTask } from "../../../../context/TaskContext";
import Button from "../../../Button";
import { Status, Priority } from "../../../../utils/Enums/EnumPriority";
import SelectInputs from "../../../Select";

const CreateTaskModal: React.FC = () => {
  const { createTask, setOpenCreateModal, openCreateModal } = useTask();
  const [taskListed, setTaskListed] = useState<
    Array<{
      name: string;
      description: string;
      priority: number;
      status: number;
    }>
  >([]);
  const [status, setStatus] = useState<number>(Status.inProgress);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<number>(Priority.Normal);

  function addMore(): void {
    setTaskListed([...taskListed, { name, description, status, priority }]);
    cleanInputs();
  }

  const errorMessage =
    taskListed.length >= 3 ? "You can only add 3 tasks at once." : "";

  const deleteTaskListed = (index: number) => {
    taskListed.splice(index, 1);
    setTaskListed([...taskListed]);
  };

  function cleanInputs(): void {
    setName("");
    setDescription("");
    setStatus(Status.inProgress);
  }

  function addTasks(): void {
    if (taskListed.length) {
      taskListed.forEach((item) => {
        createTask(item);
      });
      setTaskListed([]);
      cleanInputs();
    } else {
      createTask({ name, description, priority, status });
      setTaskListed([]);
      cleanInputs();
    }
  }
  return (
    <Styles.AddTaskForm>
      <Styles.FormContainer>
        <Styles.AddTaskInputsWrapper>
          <Styles.AddTaskLabel>Name *</Styles.AddTaskLabel>
          <Styles.AddTaskInputs
            type={"text"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Styles.AddTaskInputsWrapper>
        <Styles.AddTaskInputsWrapper>
          <Styles.AddTaskLabel>Description *</Styles.AddTaskLabel>
          <Styles.AddTaskInputs
            type={"text"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Styles.AddTaskInputsWrapper>
        <Styles.SwitchWrapper>
          <SelectInputs
            state={priority}
            stateController={setPriority}
            typePriority
          />
          <SelectInputs
            state={status}
            stateController={setStatus}
            typePriority={false}
          />
        </Styles.SwitchWrapper>
      </Styles.FormContainer>
      <Styles.TasksListWrapper>
        {taskListed.map((task, index) => {
          return (
            <Styles.TaskAdded key={index}>
              <Styles.TaskAddedTitle>{task.name}</Styles.TaskAddedTitle>
              <FaTrashAlt
                onClick={() => deleteTaskListed(index)}
                color="white"
                style={{
                  position: "absolute",
                  top: 7,
                  right: 7,
                  fontSize: "1rem",
                }}
              />
            </Styles.TaskAdded>
          );
        })}
      </Styles.TasksListWrapper>
      <Styles.ErrorWrapper>{errorMessage}</Styles.ErrorWrapper>
      <Styles.ButtonWrapper>
        <Button
          title="Add more"
          bgColor="var(--primary-lighter)"
          color="white"
          borderColor="black"
          onClick={() => {
            addMore();
          }}
          disabled={taskListed.length >= 3}
        />

        <Button
          title="Create task"
          bgColor="var(--green)"
          color="white"
          borderColor="black"
          onClick={() => {
            addTasks();
            setOpenCreateModal(!openCreateModal);
          }}
        />
      </Styles.ButtonWrapper>
    </Styles.AddTaskForm>
  );
};

export default CreateTaskModal;
