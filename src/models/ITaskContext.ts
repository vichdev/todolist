import { Dispatch, SetStateAction } from "react";
import { ITasks } from "./ITasks";

export interface ITaskContext {
  getTasks: (
    priority?: number | string,
    status?: number | string
  ) => Promise<void>;
  tasks: Array<ITasks>;
  deleteTask: (id: string) => void;
  search: string;
  setSearch: (query: string) => void;
  filteredNames: Array<ITasks>;
  toast: IToast;
  setToast: Dispatch<SetStateAction<IToast>>;
  openCreateModal: boolean;
  setOpenCreateModal: Dispatch<SetStateAction<boolean>>;
  editTask: ITasks;
  setEditTask: Dispatch<SetStateAction<ITasks>>;
  createTask: (task: ICreateTask) => void;
  updateTask: (id: string) => void;
}

interface IToast {
  title?: string;
  description?: string;
  status?: boolean;
  display?: boolean;
}

export interface ICreateTask {
  name: string;
  description: string;
  priority: number;
  status: number;
}
