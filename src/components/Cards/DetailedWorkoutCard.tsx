import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Workout } from "@/src/@types/workout.entity";
import Link from "next/link";
import DetailedWorkoutExercise from "./DetailedWorkoutExercise";

interface WorkoutCardProps {
  workout: Workout;
}

export default function DetailedWorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "20px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        padding: "24px",
        maxWidth: "400px",
        marginBottom: 20,
      }}
    >
      {/* Button "START NOW" */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <Link
          href={`/home/workouts/timer/${workout.id}`}
          passHref
          style={{ width: "100%" }}
        >
          <Box
            sx={{
              backgroundColor: "#D5D962",
              color: "white",
              borderRadius: "12px",
              padding: "16px",
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "none",
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
              display: "block",
              "&:hover": {
                backgroundColor: "#C4C450",
              },
            }}
          >
            START NOW
          </Box>
        </Link>
      </Box>
      {/* First line: kcal and time */}
      <Stack
        direction="row"
        spacing={4}
        alignItems="center"
        justifyContent="center"
        mb={4}
      >
        {/* kcal */}
        <Stack direction="row" spacing={1} alignItems="center">
          <LocalFireDepartmentIcon sx={{ color: "black" }} />
          <Typography variant="body1" color="black">
            {workout.calories} kcal
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body1" color="black">
            |
          </Typography>
        </Stack>

        {/* time */}
        <Stack direction="row" spacing={1} alignItems="center">
          <AccessTimeIcon sx={{ color: "black" }} />
          <Typography variant="body1" color="black">
            {workout.minutes} min
          </Typography>
        </Stack>
      </Stack>

      {/* Second line: Level, Category and Weight */}
      <Stack
        direction="row"
        spacing={4}
        alignItems="center"
        justifyContent="center"
        mb={4}
      >
        {/* Level */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary" mb={1}>
            Level
          </Typography>
          <Box
            sx={{
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              padding: "12px 16px",
              width: "100px",
              textAlign: "center",
            }}
          >
            <Typography
              variant="body2"
              color="black"
              textTransform="capitalize"
            >
              {workout.level}
            </Typography>
          </Box>
        </Box>

        {/* Category */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            mb={1}
            textTransform="capitalize"
          >
            Category
          </Typography>
          <Box
            sx={{
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              padding: "12px 16px",
              width: "100px",
              textAlign: "center",
            }}
          >
            <Typography
              variant="body2"
              color="black"
              textTransform="capitalize"
            >
              {workout.category}
            </Typography>
          </Box>
        </Box>

        {/* Weight */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary" mb={1}>
            Weight
          </Typography>
          <Box
            sx={{
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              padding: "12px 16px",
              width: "100px",
              textAlign: "center",
            }}
          >
            <Typography variant="body2" color="black">
              {workout.weight}
            </Typography>
          </Box>
        </Box>
      </Stack>

      {/* title and description */}
      {workout.name && (
        <Typography
          variant="h6"
          fontWeight="bold"
          color="black"
          mb={2}
          textAlign="left"
        >
          {workout.name}
        </Typography>
      )}
      {workout.description && (
        <Typography
          variant="body2"
          color="text.secondary"
          mb={4}
          textAlign="left"
        >
          {workout.description}
        </Typography>
      )}

      {/* Exercises list */}
      {workout.exercises && (
        <Stack spacing={3}>
          {workout.exercises.map((exercise, index) => (
            <DetailedWorkoutExercise
              isInCompleted={true}
              exercise={exercise}
              index={index}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
}
