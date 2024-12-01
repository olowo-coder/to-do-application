'use client';

import React, { useState } from 'react';
import { Box, Button, TextField, Alert } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Status } from '@/types/todo';

export default function CreateTodoPage() {
  const [content, setContent] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState<Status>(Status.Unfinished);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!content.trim()) {
      setErrorMessage('Task content is required');
      return;
    }

    const newTask = { content, dueDate, status };

    try {
      await axios.post('/api/todos', newTask);
      router.push('/');
    } catch (error) {
      setErrorMessage('Failed to create task');
    }
  };

  const handleCancel = () => {
    router.push('/');
  };

  return (
    <Box sx={{ maxWidth: 500, margin: 'auto', padding: 2 }}>
      <h1>Create Task</h1>

      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

      <form onSubmit={handleSubmit}>
        <TextField
          label="Task Content"
          fullWidth
          value={content}
          onChange={(e) => setContent(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Due Date"
          type="date"
          fullWidth
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ marginBottom: 2 }}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ marginBottom: 1 }}>
          Create Task
        </Button>
      </form>

      {/* Cancel button */}
      <Button variant="outlined" fullWidth onClick={handleCancel}>
        Cancel
      </Button>
    </Box>
  );
}
