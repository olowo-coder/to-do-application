'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';

export default function HomePage() {

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
    </Box>
  );
}
