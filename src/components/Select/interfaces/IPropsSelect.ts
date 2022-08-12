export interface IPropsSelect {
  typePriority: boolean;
  state: number;
  stateController: (e: number) => void;
  isNotCreatingTask?: boolean;
}
