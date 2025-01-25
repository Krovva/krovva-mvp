"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import { CircularProgress } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { Workout } from "@/components/modules/workouts/@types/workouts.entity";
import useWorkoutTimer from "@/components/modules/workouts/hooks/useTimer.hook";

export default function TimerPage() {
  // Mock Data
  const workout: Workout = {
    name: "Stretching Workout",
    description: "A relaxing full-body stretching routine.",
    category: "Stretching",
    exercises: [
      { name: "Neck Stretch", time: 10, rest: 10, reps: 1 },
      { name: "Shoulder Rolls", time: 20, rest: 10, reps: 2 },
      { name: "Hamstring Stretch", time: 40, rest: 15, reps: 1 },
    ],
  };

  const {
    currentExercise,
    currentExerciseIndex,
    timeLeft,
    isResting,
    currentRep,
    isPaused,
    isLastExercise,
    handlePauseResume,
    handleNextRepOrExercise,
  } = useWorkoutTimer(workout);

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: { xs: "20px", sm: "40px 24px" },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "380px",
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",
          marginBottom: 2,
        }}
      >
        <Image
          src="/Timer/women timer.svg"
          alt="Meditating Woman"
          width={380}
          height={50}
          className="!h-96"
        />
      </Box>

      {/* Text and Timer */}
      <Box
        sx={{
          textAlign: "center",
          marginBottom: 4,
          color: "white",
        }}
      >
        <Typography
          variant="subtitle2"
          className="text-xs text-start font-bold"
        >
          Exercise {currentExerciseIndex + 1}/{workout.exercises.length}
        </Typography>
        <Typography variant="h6" className="font-bold">
          {currentExercise.name.toUpperCase()}
        </Typography>
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
            marginTop: 2,
          }}
        >
          <CircularProgress
            variant="determinate"
            value={
              (timeLeft /
                (isResting ? currentExercise.rest : currentExercise.time)) *
              100
            }
            size={100}
            thickness={4}
            sx={{ color: "white" }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              color="white"
              sx={{ fontWeight: "bold" }}
            >
              {timeLeft}s
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          {isResting ? "Rest" : `Rep ${currentRep}/${currentExercise.reps}`}
        </Typography>
      </Box>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          width: "100%",
          maxWidth: "380px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            color: "black",
            borderRadius: "12px",
            textTransform: "none",
            padding: "10px 0",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "bold",
          }}
          onClick={handlePauseResume}
        >
          <PauseIcon /> {isPaused ? "Resume" : "Pause"}
        </Button>
        <Button
          variant="contained"
          sx={{
            flex: 1,
            backgroundColor: "#B2EB13",
            color: "black",
            borderRadius: "12px",
            textTransform: "none",
            padding: "10px 0",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "bold",
          }}
          onClick={handleNextRepOrExercise}
        >
          <DirectionsRunIcon /> {isLastExercise ? "Finish" : "Next"}
        </Button>
      </Box>
    </Container>
  );
}
