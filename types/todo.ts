export interface Todo {
  id: string;
  content: string;
  dueDate: string | null;
  status: Status;
}

export enum Status {
  Unfinished = 'unfinished',
  Done = 'done'
}
