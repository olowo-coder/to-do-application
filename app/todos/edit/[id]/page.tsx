'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Alert } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Status } from '@/types/todo';

export default function EditTodoPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [content, setContent] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState<Status>(Status.Unfinished);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    axios.get(`/api/todos/${id}`).then((response) => {
      const task = response.data;
      setContent(task.content);
      setDueDate(task.dueDate || '');
      setStatus(task.status);
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!content.trim()) {
      setErrorMessage('Task content is required');
      return;
    }

    const updatedTask = { content, dueDate, status };

    try {
      await axios.put(`/api/todos/${id}`, updatedTask);
      router.push('/');
    } catch (error) {
      setErrorMessage('Failed to update task');
    }
  };

  const handleCancel = () => {
    router.push('/');
  };

  return (
    <Box sx={{ maxWidth: 500, margin: 'auto', padding: 2 }}>
      <h1>Edit Task</h1>

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
          Save Changes
        </Button>
      </form>

      {/* Cancel button */}
      <Button variant="outlined" fullWidth onClick={handleCancel}>
        Cancel
      </Button>
    </Box>
  );
}
