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
  createTask: (task: any) => void;
}

interface IToast {
  title?: string;
  description?: string;
  status?: boolean;
  display?: boolean;
}
