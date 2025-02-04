"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { WorkoutContainer } from "@/src/components/Containers/WorkoutContainer";
import { workoutLists } from "@/src/constants/mocks/WorkoutsList";

export default function WorkoutListPage() {
  const router = useRouter();
  const { category } = useParams();
  const workouts =
    category && workoutLists[category as keyof typeof workoutLists]
      ? workoutLists[category as keyof typeof workoutLists]
      : [];

  const handleWorkoutSelected = () => {
    router.push("/workouts/details");
  };

  return (
    <WorkoutContainer
      workouts={workouts}
      handleWorkoutSelected={handleWorkoutSelected}
    />
  );
}
