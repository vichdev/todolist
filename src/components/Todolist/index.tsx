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
    updateTask,
  } = useTask();
  const [displayTasks, setDisplayTasks] = useState<boolean>(true);
  const [displayEditTask, setDisplayEditTask] = useState<boolean>(false);

  useEffect(() => {
    getTasks();
  }, []);

  function handleEditTask(id: string, item: ITasks) {
    setEditTask(item);
    console.log(item);
    console.log(id);
    setDisplayEditTask(true);
    updateTask(id);
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
                    <Styles.Name>{item.name}</Styles.Name>
                    <Styles.Description>{item.description}</Styles.Description>
                    <Styles.CreatedAt>
                      {new Intl.DateTimeFormat("pt-BR").format(
                        new Date(item.created_at)
                      )}
                    </Styles.CreatedAt>
                    <Styles.Status title={statusIcons[item.status].title}>
                      {statusIcons[item.status].icon}
                    </Styles.Status>
                    <Styles.Priority title={priorityFlags[item.priority].title}>
                      {priorityFlags[item.priority].icon}
                    </Styles.Priority>
                    <Styles.ButtonsWrapper>
                      <FaEdit
                        onClick={() => {
                          handleEditTask(item.id, item);
                        }}
                      />
                      <FaRegTrashAlt onClick={() => deleteTask(item.id)} />
                    </Styles.ButtonsWrapper>
                  </Styles.TodoList>
                );
              })
            : tasks.map((item) => {
                return (
                  <Styles.TodoList key={item.id}>
                    <Styles.Name>{item.name}</Styles.Name>
                    <Styles.Description>{item.description}</Styles.Description>
                    <Styles.CreatedAt>
                      {new Intl.DateTimeFormat("pt-BR").format(
                        new Date(item.created_at)
                      )}
                    </Styles.CreatedAt>
                    <Styles.Status title={statusIcons[item.status].title}>
                      {statusIcons[item.status].icon}
                    </Styles.Status>
                    <Styles.Priority title={priorityFlags[item.priority].title}>
                      {priorityFlags[item.priority].icon}
                    </Styles.Priority>
                    <Styles.ButtonsWrapper>
                      <FaEdit
                        onClick={() => {
                          handleEditTask(item.id, item);
                        }}
                      />
                      <FaRegTrashAlt onClick={() => deleteTask(item.id)} />
                    </Styles.ButtonsWrapper>
                  </Styles.TodoList>
                );
              })}
        </Styles.ListAll>
      </Styles.TodolistContainer>
      <Modal
        headerTitle="Edit task"
        isOpen={displayEditTask}
        toggle={setDisplayEditTask}
      >
        <EditTaskModal task={editTask} />
      </Modal>
    </Styles.TodolistWrapper>
  );
};

export default Todolist;
