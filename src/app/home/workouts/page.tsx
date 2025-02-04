"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { workoutLists } from "@/src/constants/mocks/WorkoutsList";
import { WorkoutContainer } from "@/src/components/Containers/WorkoutContainer";

export default function WorkoutsPage() {
  const router = useRouter();
  const allWorkouts = Object.values(workoutLists).flat();

  const handleWorkoutSelected = () => {
    router.push("/home/workouts/details");
  };
  return (
    <WorkoutContainer
      workouts={allWorkouts}
      handleWorkoutSelected={handleWorkoutSelected}
    />
  );
}
