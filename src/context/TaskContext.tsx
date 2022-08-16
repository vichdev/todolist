import React, { createContext, useContext, useState } from "react";
import { ICreateTask, ITaskContext, IUpdateTask } from "../models/ITaskContext";
import { ITasks } from "../models/ITasks";
import api from "../services/api";

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

const Context: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Array<ITasks>>([]);
  const [search, setSearch] = useState<string>("");
  const [toast, setToast] = useState<ITaskContext["toast"]>({
    display: false,
  });
  const [editTask, setEditTask] = useState<ITasks>({} as ITasks);
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const [displayEditTaskModal, setDisplayEditTaskModal] =
    useState<boolean>(false);

  async function createTask(task: ICreateTask): Promise<void> {
    await api
      .post("tasks", task)
      .then(() => {
        displayToast({
          title: "Request successful",
          description: "Your task(s) has been successfully created.",
          status: true,
        });
        getTasks();
      })
      .catch((e) => {
        displayToast({
          title: "Request failed",
          description: "Could not create a new task.",
          status: false,
        });
      });
  }

  async function getTasks(
    priority?: number | string,
    status?: number | string
  ): Promise<void> {
    await api
      .get("tasks", {
        params: {
          priority: priority,
          status: status,
        },
      })
      .then((response) => {
        setTasks(response.data);
      })
      .catch((e) => {
        displayToast({
          title: "Request failed",
          description: "Could not access tasks.",
          status: false,
        });
      });
  }

  const filteredNames =
    search.length > 0
      ? tasks.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  const deleteTask = async (id: string): Promise<void> => {
    await api
      .delete(`/tasks/${id}`)
      .then(async () => {
        await getTasks();
        displayToast({
          title: "Request successful",
          description: "Your task has been successfully deleted.",
          status: true,
        });
      })
      .catch((e) => {
        displayToast({
          title: "Request failed",
          description: e.message,
          status: false,
        });
      });
  };
  //VERIFICAR E RETIRAR MOCK.
  async function updateTask(id: string, item: IUpdateTask): Promise<void> {
    const { name, description, priority, status } = item;
    await api
      .put(`tasks/${id}`, {
        name: name,
        description: description,
        priority: priority,
        status: status,
      })
      .then(() => {
        getTasks();
        displayToast({
          title: "Request successful",
          description: "Your task has been successfully edited.",
          status: true,
        });
      })
      .catch((e) => {
        if (!name || !description) {
          displayToast({
            title: "Request failed",
            description: "Name or description can't be empty.",
            status: false,
          });
        } else {
          displayToast({
            title: "Request failed",
            description: "Unable to edit this task.",
            status: false,
          });
        }
      });
  }

  function displayToast({
    title,
    description,
    status,
  }: ITaskContext["toast"]): void {
    setToast({
      ...toast,
      title: title,
      description: description,
      status: status,
      display: true,
    });
    setTimeout(() => {
      setToast({
        display: false,
        title: "",
        description: "",
        status: undefined,
      });
    }, 3000);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        getTasks,
        search,
        setSearch,
        filteredNames,
        toast,
        setToast,
        openCreateModal,
        setOpenCreateModal,
        createTask,
        editTask,
        setEditTask,
        updateTask,
        displayEditTaskModal,
        setDisplayEditTaskModal,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

function useTask(): ITaskContext {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("o hook useTask deve ser usado como provider!");
  }
  return context;
}

export { Context, useTask };
