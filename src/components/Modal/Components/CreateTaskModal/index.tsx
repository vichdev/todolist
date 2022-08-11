import React, { useState } from "react";
import * as Styles from "./styles";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { FaTrashAlt } from "react-icons/fa";
import { useTask } from "../../../../context/TaskContext";
import Button from "../../../Button";

const CreateTaskModal: React.FC = () => {
  const [status, setSwitchStatus] = useState<boolean>(false);
  const [taskListed, setTaskListed] = useState<
    Array<{
      name: string;
      description: string;
      priority: number;
      status: boolean;
    }>
  >([]);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<number>(2);
  const { createTask, setOpenCreateModal, openCreateModal } = useTask();

  function addMore(): void {
    setTaskListed([...taskListed, { name, description, status, priority }]);
    cleanInputs();
  }

  const errorMessage =
    taskListed.length >= 3 ? "You can only add 3 tasks at once." : "";

  const options = [
    {
      text: "Urgent",
      value: 0,
    },
    {
      text: "High",
      value: 1,
    },
    {
      text: "Normal",
      value: 2,
    },
  ];

  const deleteTaskListed = (index: number) => {
    taskListed.splice(index, 1);
    setTaskListed([...taskListed]);
  };

  function cleanInputs(): void {
    setName("");
    setDescription("");
    setSwitchStatus(false);
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
          <Styles.PriorityButtonWrapper>
            <Styles.PrioritySelect name="flag">
              {options.map((option) => {
                return (
                  <option
                    value={option.value}
                    onClick={() => {
                      setPriority(option.value);
                    }}
                  >
                    {option.text}
                  </option>
                );
              })}
            </Styles.PrioritySelect>
          </Styles.PriorityButtonWrapper>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  value={status}
                  onChange={() => setSwitchStatus(!status)}
                />
              }
              labelPlacement="start"
              label={status ? "Done" : "In Progress"}
            />
          </FormGroup>
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
