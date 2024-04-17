export enum TodoStatus {
  New = 'New',
  InProgress = 'In progress',
  Done = 'Done',
}

export type Todo = {
  id?: string;
  text: string;
  status?: TodoStatus;
  dueDate: string;
};

export type TodoTypeForm = {
  id?: string;
  text: string;
  dueDate: Date;
};

export type TodoResponse = {
  [key: string]: Todo;
};
