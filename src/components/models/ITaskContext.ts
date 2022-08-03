import { ITasks } from "./ITasks";

export interface ITaskContext {
  getTasks: () => void;
  tasks: Array<ITasks>;
  deleteTask: (id: string) => void;
  search: string;
  setSearch: (query: string) => void;
  filteredNames: Array<ITasks>;
}
