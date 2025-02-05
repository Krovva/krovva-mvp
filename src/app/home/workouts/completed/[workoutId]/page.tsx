"use client";

import WorkoutCompleted from "@/src/components/modules/workouts/ui/components/WorkoutCompleted";
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
    <WorkoutCompleted
      progress={data.progress}
      completed={data.completed}
      workout={workout}
    />
  );
};

export default WorkoutDetailsPage;
