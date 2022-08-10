import React, { createContext, useContext, useState } from "react";
import { ITaskContext } from "../models/ITaskContext";
import { ITasks } from "../models/ITasks";
import api from "../services/api";

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

const Context: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Array<ITasks>>([]);
  const [search, setSearch] = useState<string>("");
  const [toast, setToast] = useState<ITaskContext["toast"]>({
    display: false,
  });

  async function getTasks(): Promise<void> {
    await api
      .get("tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((e) => alert(e));
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
        console.log(e.message);
        displayToast({
          title: "Request failed",
          description: e.message,
          status: false,
        });
      });
  };

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
