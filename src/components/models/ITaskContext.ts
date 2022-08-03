import { ITasks } from "./ITasks";

export interface ITaskContext {
  getTasks: () => void;
  tasks: Array<ITasks>;
  deleteTask: (id: string) => void;
}
