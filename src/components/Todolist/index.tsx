import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import {
  FaRegTrashAlt,
  FaEdit,
  FaCheckCircle,
  FaMinusCircle,
  FaFlag,
} from "react-icons/fa";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { useTask } from "../../context/TaskContext";
import Modal from "../Modal";
import EditTaskModal from "../Modal/Components/EditTaskModal";
import { ITasks } from "../../models/ITasks";
import Button from "../Button";
import NoData from "../NoData";

interface IObjectLiteralIcons {
  [key: number]: { title: string; icon: JSX.Element };
}

const Todolist: React.FC = () => {
  const {
    getTasks,
    filteredNames,
    tasks,
    search,
    deleteTask,
    setEditTask,
    editTask,
    setDisplayEditTaskModal,
    displayEditTaskModal,
  } = useTask();
  const [displayTasks, setDisplayTasks] = useState<boolean>(true);
  const [displayDeleteModal, setDisplayDeleteModal] = useState<boolean>(false);
  const [taskId, setTaskId] = useState<string>("");

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleEditTask(item: ITasks): void {
    setEditTask(item);
    setDisplayEditTaskModal(!displayEditTaskModal);
  }

  const priorityFlags: IObjectLiteralIcons = {
    0: {
      title: "Urgent",
      icon: <FaFlag color="var(--red)" />,
    },
    1: {
      title: "High",
      icon: <FaFlag color="#ffcc00" />,
    },
    2: {
      title: "Normal",
      icon: <FaFlag color="#6fddff" />,
    },
  };

  const statusIcons: IObjectLiteralIcons = {
    0: {
      title: "In Progress",
      icon: <FaMinusCircle color="red" title="In progress" />,
    },
    1: {
      title: "Done",
      icon: <FaCheckCircle color="green" title="Done" />,
    },
  };

  return (
    <>
      {tasks.length ? (
        <Styles.TodolistWrapper>
          <Styles.TodolistContainer>
            <Styles.TableHeader>
              <Styles.TodoListHeader>
                <Styles.HeaderName>Name</Styles.HeaderName>
                <Styles.HeaderDescription>Description</Styles.HeaderDescription>
                <Styles.HeaderDate>Date</Styles.HeaderDate>
                <Styles.HeaderStatus>Status</Styles.HeaderStatus>
                <Styles.HeaderStatus>Priority</Styles.HeaderStatus>
                <Styles.ButtonHeader>
                  {displayTasks ? (
                    <IoIosArrowDropup
                      color="var(--text)"
                      onClick={() => setDisplayTasks(!displayTasks)}
                    />
                  ) : (
                    <IoIosArrowDropdown
                      color="var(--text)"
                      onClick={() => setDisplayTasks(!displayTasks)}
                    />
                  )}
                </Styles.ButtonHeader>
              </Styles.TodoListHeader>
            </Styles.TableHeader>
            <Styles.ListAll setOpen={displayTasks}>
              {search.length > 0
                ? filteredNames.map((item) => {
                    return (
                      <Styles.TodoList key={item.id}>
                        <Styles.Name title={item.name}>{item.name}</Styles.Name>
                        <Styles.Description title={item.description}>
                          {item.description}
                        </Styles.Description>
                        <Styles.CreatedAt>
                          {new Intl.DateTimeFormat("pt-BR").format(
                            new Date(item.created_at)
                          )}
                        </Styles.CreatedAt>
                        <Styles.Status title={statusIcons[item.status].title}>
                          {statusIcons[item.status].icon}
                        </Styles.Status>
                        <Styles.Priority
                          title={priorityFlags[item.priority].title}
                        >
                          {priorityFlags[item.priority].icon}
                        </Styles.Priority>
                        <Styles.ButtonsWrapper>
                          <FaEdit
                            onClick={() => {
                              handleEditTask(item);
                            }}
                          />
                          <FaRegTrashAlt
                            onClick={() => {
                              setDisplayDeleteModal(!displayDeleteModal);
                              setTaskId(item.id);
                            }}
                          />
                        </Styles.ButtonsWrapper>
                      </Styles.TodoList>
                    );
                  })
                : tasks.map((item) => {
                    return (
                      <Styles.TodoList key={item.id}>
                        <Styles.Name title={item.name}>{item.name}</Styles.Name>
                        <Styles.Description title={item.description}>
                          {item.description}
                        </Styles.Description>
                        <Styles.CreatedAt>
                          {new Intl.DateTimeFormat("pt-BR").format(
                            new Date(item.created_at)
                          )}
                        </Styles.CreatedAt>
                        <Styles.Status title={statusIcons[item.status].title}>
                          {statusIcons[item.status].icon}
                        </Styles.Status>
                        <Styles.Priority
                          title={priorityFlags[item.priority].title}
                        >
                          {priorityFlags[item.priority].icon}
                        </Styles.Priority>
                        <Styles.ButtonsWrapper>
                          <FaEdit
                            onClick={() => {
                              handleEditTask(item);
                            }}
                          />
                          <FaRegTrashAlt
                            onClick={() => {
                              setDisplayDeleteModal(!displayDeleteModal);
                              setTaskId(item.id);
                            }}
                          />
                        </Styles.ButtonsWrapper>
                      </Styles.TodoList>
                    );
                  })}
            </Styles.ListAll>
          </Styles.TodolistContainer>
          <Modal
            headerTitle="Edit task"
            isOpen={displayEditTaskModal}
            toggle={setDisplayEditTaskModal}
          >
            <EditTaskModal task={editTask} />
          </Modal>
          <Modal
            headerTitle="Delete Task"
            isOpen={displayDeleteModal}
            toggle={setDisplayDeleteModal}
            heightSize="10rem"
          >
            <Styles.DeleteModalWrapper>
              <Styles.DeleteModalTitle>
                Are you sure that you want to delete this task?
              </Styles.DeleteModalTitle>
              <Styles.DeleteModalButtonWrapper>
                <Button
                  bgColor="var(--red)"
                  title="No"
                  color="white"
                  onClick={() => setDisplayDeleteModal(!displayDeleteModal)}
                />
                <Button
                  bgColor="var(--green)"
                  title="Yes"
                  color="white"
                  onClick={() => {
                    deleteTask(taskId);
                    setDisplayDeleteModal(!displayDeleteModal);
                  }}
                />
              </Styles.DeleteModalButtonWrapper>
            </Styles.DeleteModalWrapper>
          </Modal>
        </Styles.TodolistWrapper>
      ) : (
        <NoData />
      )}
    </>
  );
};

export default Todolist;
