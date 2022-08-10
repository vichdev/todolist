import { Dispatch, SetStateAction } from "react";
import { ITasks } from "./ITasks";

export interface ITaskContext {
  getTasks: () => void;
  tasks: Array<ITasks>;
  deleteTask: (id: string) => void;
  search: string;
  setSearch: (query: string) => void;
  filteredNames: Array<ITasks>;
  toast: IToast;
  setToast: Dispatch<SetStateAction<IToast>>;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

interface IToast {
  title?: string;
  description?: string;
  status?: boolean;
  display?: boolean;
}
