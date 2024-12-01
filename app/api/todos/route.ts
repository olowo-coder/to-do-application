import { NextRequest, NextResponse } from "next/server";
import { readTodos, writeTodos } from "@/utils/todos";
import { Todo, Status } from "@/types/todo";
import { v4 as uuidv4 } from "uuid";

// Featch all Todos
export async function GET() {
  const todos: Todo[] = await readTodos();
  return NextResponse.json(todos);
}

// Add a new Todo
export async function POST(request: NextRequest) {
  const { content, dueDate, status }: Partial<Todo> = await request.json();

  if (status && !Object.values(Status).includes(status as Status)) {
    return NextResponse.json({ error: 'Invalid status value' }, { status: 400 });
  }

  if (!content) {
    return NextResponse.json(
      { error: "Task content is required" },
      { status: 400 }
    );
  }

  const newTask: Todo = {
    id: uuidv4(),
    content,
    dueDate: dueDate || null,
    status: status || Status.Unfinished,
  };

  const todos: Todo[] = await readTodos();
  todos.push(newTask);

  await writeTodos(todos);

  return NextResponse.json(newTask, { status: 201 });
}
