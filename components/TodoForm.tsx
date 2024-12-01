'use client';

import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { Todo } from "@/types/todo";

interface Props {
  task?: Todo;
}

export default function TodoForm({ task }: Props) {
  const [content, setContent] = useState(task?.content || "");
  const [dueDate, setDueDate] = useState(task?.dueDate || "");

  const handleSubmit = async () => {
    if (task) {
      await axios.put(`/api/todos/${task.id}`, { content, dueDate });
    } else {
      await axios.post("/api/todos", { content, dueDate, status: "unfinished" });
    }
    window.location.href = "/";
  };

  return (
    <Box>
      <TextField
        label="Task Content"
        fullWidth
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Due Date"
        type="date"
        fullWidth
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Save
      </Button>
    </Box>
  );
}
