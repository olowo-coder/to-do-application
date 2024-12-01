import fs from "fs/promises";
import path from "path";
import { Todo } from "@/types/todo";

const filePath = path.resolve("data", "todos.json");

export async function readTodos(): Promise<Todo[]> {
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data) as Todo[];
}

export async function writeTodos(todos: Todo[]): Promise<void> {
  await fs.writeFile(filePath, JSON.stringify(todos, null, 2), "utf8");
}
