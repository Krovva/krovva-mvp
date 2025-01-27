"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { workoutLists } from "../Mocks/WorkoutsList";
import { WorkoutContainer } from "@/components/Containers/WorkoutContainer";

export default function WorkoutsPage() {
  const router = useRouter();
  const allWorkouts = Object.values(workoutLists).flat();

  const handleWorkoutSelected = () => {
    router.push("/workouts/details");
  };
  return (
    <WorkoutContainer
      workouts={allWorkouts}
      handleWorkoutSelected={handleWorkoutSelected}
    />
  );
}