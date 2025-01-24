import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface WorkoutCardProps {
  calories: number;
  minutes: number;
  level: string;
  category: string;
  weight: string;
}

export default function WorkoutCard({
  calories,
  minutes,
  level,
  category,
  weight,
}: WorkoutCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={1} alignItems="center">
          <LocalFireDepartmentIcon sx={{ color: 'orange' }} />
          <Typography variant="body1" fontWeight="bold">
            {calories} kcal
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <AccessTimeIcon sx={{ color: 'gray' }} />
          <Typography variant="body1" fontWeight="bold">
            {minutes} min
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" mt={2}>
        <Typography variant="body2" color="text.secondary">
          Level: {level}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Weight: {weight}
        </Typography>
      </Stack>
    </Box>
  );
}