import React, { useState } from "react";
import * as Styles from "./styles";
import { FaSearch } from "react-icons/fa";
import { useTask } from "../../context/TaskContext";
import Button from "../Button";
import Modal from "../Modal";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

const Header: React.FC = () => {
  const { search, setSearch, setOpenModal } = useTask();
  const [status, setSwitchStatus] = useState<boolean>(false);
  const [taskListed, setTaskListed] = useState<Array<[]>>([]);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <Styles.HeaderWrapper>
      <Styles.Header>
        <Styles.HeaderTitle>To-do list</Styles.HeaderTitle>
        <Styles.NavbarSearchWrapper>
          <Styles.NavbarButton>
            <Styles.NavbarSearch
              placeholder="Pesquise pelo nome"
              type={"search"}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <FaSearch />
          </Styles.NavbarButton>
          <Button
            title="New task"
            color="white"
            bgColor="var(--primary-lighter)"
            onClick={() => {
              setOpenModal(true);
            }}
          />
        </Styles.NavbarSearchWrapper>
      </Styles.Header>
      <Modal headerTitle="Add new tasks">
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
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      value={status}
                      onClick={() => setSwitchStatus(!status)}
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
              return <Styles.TaskAdded></Styles.TaskAdded>;
            })}
          </Styles.TasksListWrapper>
          <Styles.ButtonWrapper>
            <Button
              title="Add more"
              bgColor="var(--primary-lighter)"
              color="white"
              borderColor="black"
            />
            <Button
              title="Create task"
              bgColor="var(--green)"
              color="white"
              borderColor="black"
              onClick={() => console.log(name)}
            />
          </Styles.ButtonWrapper>
        </Styles.AddTaskForm>
      </Modal>
    </Styles.HeaderWrapper>
  );
};

export default Header;
