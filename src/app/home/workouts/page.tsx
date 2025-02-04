"use client";

import React from "react";
import { workoutList } from "@/src/constants/mocks/WorkoutsList";
import { WorkoutContainer } from "@/src/components/Containers/WorkoutContainer";

export default function WorkoutsPage() {
  const allWorkouts = Object.values(workoutList).flat();
  return <WorkoutContainer workouts={allWorkouts} />;
}
