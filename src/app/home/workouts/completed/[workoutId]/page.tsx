"use client";

import WorkoutCompleted from "@/src/components/modules/workouts/ui/WorkoutCompleted";
import { workoutList } from "@/src/constants/mocks/WorkoutsList";
import Box from "@mui/material/Box";
import { useParams } from "next/navigation";

const data = {
  progress: 70,
  // duration:0,
  completed: 6,
  // calories:0,
  // weight:0,
  // tutAccuracy:0,
};

const WorkoutDetailsPage = () => {
  const { workoutId } = useParams();
  const workout = workoutList.find((w) => w.id === workoutId);

  if (!workout) {
    return <p>Workout not found</p>;
  }

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
        py: 5,
        justifyItems: "center",
      }}
    >
      <WorkoutCompleted
        progress={data.progress}
        completed={data.completed}
        workout={workout}
      />
    </Box>
  );
};

export default WorkoutDetailsPage;
