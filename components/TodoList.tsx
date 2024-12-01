import React from 'react';
import { Todo } from '@/types/todo';
import { Box, Checkbox, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
  onToggleStatus: (id: string, status: 'unfinished' | 'done') => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggleStatus }) => {
  return (
    <Box>
      {todos.map((todo) => (
        <Box key={todo.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          <Checkbox
            checked={todo.status === 'done'}
            onChange={() => onToggleStatus(todo.id, todo.status)}
          />
          <Typography
            sx={{
              textDecoration: todo.status === 'done' ? 'line-through' : 'none',
              flex: 1,
            }}
          >
            {todo.content}
          </Typography>
          <IconButton onClick={() => onDelete(todo.id)} color="secondary">
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => (window.location.href = `/todos/edit/${todo.id}`)} color="primary">
            <EditIcon />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default TodoList;
