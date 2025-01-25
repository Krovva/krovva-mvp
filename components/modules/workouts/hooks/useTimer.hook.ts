"use client";

import { useEffect, useState } from "react";
import { Workout } from "../@types/workouts.entity";

const useWorkoutTimer = (workout: Workout) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentRep, setCurrentRep] = useState(1);
  const [timeLeft, setTimeLeft] = useState(workout.exercises[0].time);
  const [isResting, setIsResting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLastExercise, setIsLastExercise] = useState(false);

  const currentExercise = workout.exercises[currentExerciseIndex];

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) return prev - 1;

        if (isResting) {
          handleNextRepOrExercise();
          return 0;
        } else {
          setIsResting(true);
          return currentExercise.rest;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, isResting, currentExercise]);

  useEffect(() => {
    if (
      currentExerciseIndex === workout.exercises.length - 1 &&
      currentRep === currentExercise.reps
    ) {
      setIsLastExercise(true);
    } else {
      setIsLastExercise(false);
    }
  }, [currentExerciseIndex, currentRep, currentExercise, workout.exercises]);

  const handleNextRepOrExercise = () => {
    setIsResting(false);

    if (currentRep < currentExercise.reps) {
      setCurrentRep(currentRep + 1);
      setTimeLeft(currentExercise.time);
    } else if (currentExerciseIndex < workout.exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setCurrentRep(1);
      setTimeLeft(workout.exercises[currentExerciseIndex + 1].time);
    } else {
      // Workout complete
      alert("Workout complete!");
    }
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  return {
    handlePauseResume,
    handleNextRepOrExercise,
    currentExercise,
    currentRep,
    currentExerciseIndex,
    timeLeft,
    isResting,
    isPaused,
    isLastExercise,
  };
};

export default useWorkoutTimer;
