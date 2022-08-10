import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import {
  FaRegTrashAlt,
  FaEdit,
  FaCheckCircle,
  FaMinusCircle,
} from "react-icons/fa";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { useTask } from "../../context/TaskContext";

const Todolist: React.FC = () => {
  const { getTasks, filteredNames, tasks, search, deleteTask } = useTask();
  const [displayTasks, setDisplayTasks] = useState<boolean>(true);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Styles.TodolistWrapper>
      <Styles.TodolistContainer>
        <Styles.TodoListHeader>
          <Styles.HeaderName>Name</Styles.HeaderName>
          <Styles.HeaderDescription>Description</Styles.HeaderDescription>
          <Styles.HeaderDate>Date</Styles.HeaderDate>
          <Styles.HeaderStatus>Status</Styles.HeaderStatus>
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
                    <Styles.Status>
                      {item.status ? (
                        <FaCheckCircle color="green" title="Done" />
                      ) : (
                        <FaMinusCircle color="red" title="In progress" />
                      )}
                    </Styles.Status>
                    <Styles.ButtonsWrapper>
                      <FaEdit />
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
                    <Styles.Status>
                      {item.status ? (
                        <FaCheckCircle color="green" title="Done" />
                      ) : (
                        <FaMinusCircle color="red" title="In progress" />
                      )}
                    </Styles.Status>
                    <Styles.ButtonsWrapper>
                      <FaEdit />
                      <FaRegTrashAlt onClick={() => deleteTask(item.id)} />
                    </Styles.ButtonsWrapper>
                  </Styles.TodoList>
                );
              })}
        </Styles.ListAll>
      </Styles.TodolistContainer>
    </Styles.TodolistWrapper>
  );
};

export default Todolist;
