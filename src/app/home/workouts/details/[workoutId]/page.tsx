"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import DetailedWorkoutCard from "@/src/components/modules/workouts/ui/cards/DetailedWorkoutCard";
import { workoutList } from "@/src/constants/mocks/WorkoutsList";

export default function WorkoutDetails() {
  const { workoutId } = useParams();

  const workout = workoutList.find((w) => w.id === workoutId);

  if (!workout) {
    return <p>Workout not found</p>;
  }

  return (
    <>
      {/* Container for cover img*/}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "50vh",
          zIndex: 0,
        }}
      >
        <Image
          src="/Cover/WorkoutDetailsCoverImg.png" // ! Change this to workout.coverImg
          alt="Workout Cover"
          layout="fill"
          objectFit="cover"
          priority
          style={{ borderRadius: "0 0 5% 5%" }}
        />
      </div>

      {/* WorkoutCard Container */}
      <div
        style={{
          top: "30vh",
          position: "relative",
          width: "100%",
          maxWidth: "400px",
          zIndex: 2,
        }}
      >
        <DetailedWorkoutCard workout={workout} />
      </div>
    </>
  );
}
