"use client";

import React from "react";
import { Box } from "@mui/material";
import { Workout } from "@/src/@types/workout.entity";
import WorkoutCard from "../../Cards/WorkoutCard";

interface WorkoutContainerProps {
  workouts: Workout[];
}

export const WorkoutContainer: React.FC<WorkoutContainerProps> = ({
  workouts,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "20px",
        width: "100%",
        maxWidth: "400px",
        marginBottom: 20,
      }}
    >
      {workouts.map((workout) => (
        <WorkoutCard
          key={workout.id}
          id={workout.id}
          name={workout.name}
          description={workout.description}
          image={workout.image}
        />
      ))}
    </Box>
  );
};
