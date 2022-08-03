import React, { createContext, useContext, useState } from "react";
import { ITaskContext } from "../components/models/ITaskContext";
import { ITasks } from "../components/models/ITasks";
import api from "../services/api";

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

const Context: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Array<ITasks>>([]);
  const [search, setSearch] = useState<string>("");

  async function getTasks(): Promise<void> {
    await api
      .get("tasks")
      .then((response) => {
        setTasks(response.data);
        console.log(response.data);
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
    await api.delete(`/tasks/${id}`).then(async () => {
      await getTasks();
    });
  };
  return (
    <TaskContext.Provider
      value={{ tasks, deleteTask, getTasks, search, setSearch, filteredNames }}
    >
      {children}
    </TaskContext.Provider>
  );
};

function useTask(): ITaskContext {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("o hook deve ser usado como provider!");
  }
  return context;
}

export { Context, useTask };
