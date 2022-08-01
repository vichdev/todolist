import React, { createContext, useContext } from "react";
import { ITaskContext } from "../components/models/ITaskContext";

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

const Context: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <TaskContext.Provider value={{}}>{children}</TaskContext.Provider>;
};

function useTask(): ITaskContext {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("o hook deve ser usado como provider!");
  }
  return context;
}

export { Context, useTask };
