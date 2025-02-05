"use client";

import WorkoutCompleted from "@/src/components/modules/workouts/ui/components/WorkoutCompleted";
import { workoutList } from "@/src/constants/mocks/WorkoutsList";
import { useParams } from "next/navigation";

const WorkoutDetailsPage = () => {
  const { workoutId } = useParams();
  const workout = workoutList.find((w) => w.id === workoutId);

  if (!workout) {
    return <p>Workout not found</p>;
  }

  return <WorkoutCompleted workout={workout} />;
};

export default WorkoutDetailsPage;
