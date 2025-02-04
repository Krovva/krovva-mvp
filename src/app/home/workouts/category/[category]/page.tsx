"use client";

import React from "react";
import { useParams } from "next/navigation";
import { workoutList } from "@/src/constants/mocks/WorkoutsList";
import { Workout } from "@/src/@types/workout.entity";
import { WorkoutContainer } from "@/src/components/layout/containers/WorkoutContainer";

export default function WorkoutListPage() {
  const { category } = useParams();
  const workouts: Workout[] = category
    ? workoutList.filter((workout) => workout.category === category)
    : [];

  return <WorkoutContainer workouts={workouts} />;
}
