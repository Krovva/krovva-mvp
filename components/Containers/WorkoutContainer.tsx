"use client"

import React from 'react';
import { Box, Typography } from '@mui/material';
import WorkoutCard from '../Cards/WorkoutCard';

interface Workout {
  name: string;
  description: string;
  image: string;
}

interface WorkoutContainerProps {
  workouts: Workout[];
  handleWorkoutSelected: () => void;
}

export const WorkoutContainer: React.FC<WorkoutContainerProps> = ({ workouts, handleWorkoutSelected }) => {

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "white",
        color: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 3,
        py: 2,
      }}
    >
      <Box
        sx={{
          bgcolor: "#D5D962",
          borderRadius: "16px",
          px: 3,
          py: 1,
          mb: 3,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700, fontSize: "24px", mb: 0 }}>
          Workouts
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: 'space-between',
          gap: "20px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {workouts.map((workout, index) => (
          <WorkoutCard
            key={index}
            name={workout.name}
            description={workout.description}
            image={workout.image}
            handleWorkoutSelected={() => handleWorkoutSelected()} 
          />
        ))}
      </Box>
    </Box>
  )
}
