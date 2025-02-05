import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import { CircularProgress } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import useWorkoutTimer from "../../hooks/useTimer.hook";
import { Workout } from "@/src/@types/workout.entity";

interface WorkoutTimerProps {
  workout: Workout;
}

const WorkoutTimer = ({ workout }: WorkoutTimerProps) => {
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
    <>
      {/* Image */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "380px",
          position: "relative",
          borderRadius: "15px",
          overflow: "hidden",
          marginBottom: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src="/Timer/women timer.svg"
          alt="Meditating Woman"
          width={350}
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
    </>
  );
};

export default WorkoutTimer;
