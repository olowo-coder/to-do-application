import { NextRequest, NextResponse } from "next/server";
import { readTodos, writeTodos } from "@/utils/todos";
import { Todo, Status } from "@/types/todo";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const todos: Todo[] = await readTodos();
  const task = todos.find((todo) => todo.id === params.id);

  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  return NextResponse.json(task);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { content, dueDate, status }: Partial<Todo> = await request.json();
  const todos: Todo[] = await readTodos();
  const index = todos.findIndex((todo) => todo.id === params.id);

  if (index === -1) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  todos[index] = {
    ...todos[index],
    content: content || todos[index].content,
    dueDate: dueDate || todos[index].dueDate,
    status: status || todos[index].status,
  };

  await writeTodos(todos);

  return NextResponse.json(todos[index]);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const todos: Todo[] = await readTodos();
  const updatedTodos = todos.filter((todo) => todo.id !== params.id);

  if (todos.length === updatedTodos.length) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  await writeTodos(updatedTodos);

  return NextResponse.json({ message: "Task deleted successfully" }, { status: 200 });
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const { status }: { status: Status } = await request.json();

  if (status && !Object.values(Status).includes(status)) {
    return NextResponse.json({ error: 'Invalid status value' }, { status: 400 });
  }

  const todos: Todo[] = await readTodos();
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 });
  }

  todos[todoIndex].status = status || todos[todoIndex].status;

  await writeTodos(todos);

  return NextResponse.json(todos[todoIndex]);
}

