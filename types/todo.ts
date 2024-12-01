export interface Todo {
  id: string;
  content: string;
  dueDate: string | null;
  status: 'unfinished' | 'done'; 
}
