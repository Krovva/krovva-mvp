"use client";

import WorkoutTimer from "@/src/components/modules/workouts/ui/components/WorkoutTimer";
import { workoutList } from "@/src/constants/mocks/WorkoutsList";
import { useParams } from "next/navigation";

export default function TimerPage() {
  const { workoutId } = useParams();

  const workout = workoutList.find((w) => w.id === workoutId);

  if (!workout) {
    return <p>Workout not found</p>;
  }

  return <WorkoutTimer workout={workout} />;
}
