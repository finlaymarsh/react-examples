import ActionType from "./ActionType";

export default interface Action {
  type: ActionType;
  value?: string;
}
