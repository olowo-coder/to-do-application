'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import axios from 'axios';
import TodoList from '@/components/TodoList';
import { Todo, Status } from '@/types/todo';


export default function HomePage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get('/api/todos').then((response) => setTodos(response.data));
  }, []);

  const deleteTodo = async (id: string) => {
    await axios.delete(`/api/todos/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoStatus = async (id: string, currentStatus: 'unfinished' | 'done') => {
    const updatedStatus = currentStatus === Status.Unfinished ? Status.Done : Status.Unfinished;
    await axios.patch(`/api/todos/${id}`, { status: updatedStatus });
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: updatedStatus } : todo
      )
    );
  };

  return (
    <Box>
      {/* Button to add a new task */}
      <Button
        variant="contained"
        sx={{ marginBottom: 2 }}
        onClick={() => (window.location.href = '/todos/create')}
      >
        Add Task
      </Button>

      {/* Pass todos, deleteTodo, and toggleTodoStatus as props to TodoList */}
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggleStatus={toggleTodoStatus}
      />
    </Box>
  );
}
