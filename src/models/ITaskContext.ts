import { Dispatch, SetStateAction } from "react";
import { EnumPriority, EnumStatus } from "../utils/Enums/Enums";
import { ITasks } from "./ITasks";

export interface ITaskContext {
  getTasks: (priority?: EnumPriority, status?: EnumStatus) => Promise<void>;
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
  updateTask: (id: string, item: IUpdateTask) => void;
  displayEditTaskModal: boolean;
  setDisplayEditTaskModal: Dispatch<SetStateAction<boolean>>;
  displayModalMobile: boolean;
  setDisplayModalMobile: Dispatch<SetStateAction<boolean>>;
  displayToast: ({ title, description, status }: IToast) => void;
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

export interface IUpdateTask {
  name: string;
  description: string;
  priority: number;
  status: number;
}
