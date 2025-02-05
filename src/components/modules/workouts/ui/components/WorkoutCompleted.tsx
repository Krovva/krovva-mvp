import type { Workout } from "@/src/@types/workout.entity";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import badge from "@/public/badge.png";
import DetailedWorkoutExercise from "@/src/components/modules/workouts/ui/cards/DetailedWorkoutExercise";

export interface WorkoutCompletedProps {
  workout: Workout;
}

const WorkoutCompleted = ({ workout }: WorkoutCompletedProps) => {
  const totalCalories = workout.exercises.reduce(
    (sum, exercise) => sum + exercise.calories,
    0,
  );
  const totalTime = workout.exercises.reduce(
    (sum, exercise) => sum + exercise.time,
    0,
  );

  return (
    <>
      {/* Main Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "389px",
          borderRadius: "37.924px",
          backgroundColor: "#1E1D20",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          gap: 3,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Image src={badge} alt="badge" className="mx-auto" />
            <Image
              src={workout.image}
              width={80}
              height={40}
              alt="badge"
              className="mx-auto"
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </Box>

          <Typography
            variant="h5"
            sx={{ mt: 2, fontWeight: "bold", color: "white" }}
          >
            {workout.name}
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              mt: 1,
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: 1,
                mt: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "white", textTransform: "uppercase" }}
              >
                {workout.level}
              </Typography>
              |
              <Typography
                variant="body2"
                sx={{ color: "white", textTransform: "uppercase" }}
              >
                {workout.category}
              </Typography>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: 1,
                mt: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "white", textTransform: "uppercase" }}
              >
                {workout.minutes} Minutes
              </Typography>
              |
              <Typography
                variant="body2"
                sx={{ color: "white", textTransform: "uppercase" }}
              >
                {workout.weight}
              </Typography>
              |
              <Typography
                variant="body2"
                sx={{ color: "white", textTransform: "uppercase" }}
              >
                {workout.calories} kcal
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Achieved */}
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", color: "white", mb: 2 }}
          >
            Achieved
          </Typography>
          <Box
            sx={{
              width: "100%",
              borderRadius: "27.445px",
              border: "1px solid #2B2A2D",
              backgroundColor: "#2B2A2D",
              display: "flex",
              flexDirection: "column",
              px: 3,
              py: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid gray",
                pb: 2,
              }}
            >
              <Typography variant="body1" sx={{ color: "white" }}>
                <Link href="#">
                  <Typography variant="body1" sx={{ color: "white" }}>
                    <span style={{ fontWeight: "bold", marginRight: 5 }}>
                      Total Time:
                    </span>
                    {totalTime} min
                  </Typography>
                </Link>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pt: 2,
              }}
            >
              <Typography variant="body1" sx={{ color: "white" }}>
                <Link href="#">
                  <Typography variant="body1" sx={{ color: "white" }}>
                    <span style={{ fontWeight: "bold", marginRight: 5 }}>
                      Total Calories:
                    </span>
                    {totalCalories} kcal
                  </Typography>
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Exercises */}
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", color: "white", mb: 2 }}
          >
            Exercises Completed
          </Typography>
          <Box
            sx={{
              width: "100%",
              borderRadius: "27.445px",
              border: "1px solid #2B2A2D",
              backgroundColor: "#2B2A2D",
              display: "flex",
              flexDirection: "column",
              px: 1,
              py: 2,
              mb: 20,
            }}
          >
            {/* Exercises list */}
            {workout.exercises && (
              <Stack spacing={3}>
                {workout.exercises.map((exercise, index) => (
                  <DetailedWorkoutExercise
                    key={index}
                    isInCompleted={false}
                    exercise={exercise}
                    index={index}
                  />
                ))}
              </Stack>
            )}
            {/* Button "DONE" */}
            <Box
              sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 2 }}
            >
              <Link href="/home" passHref style={{ width: "100%" }}>
                <Box
                  sx={{
                    backgroundColor: "#D5D962",
                    color: "white",
                    borderRadius: "12px",
                    padding: "16px",
                    fontWeight: "bold",
                    fontSize: "16px",
                    textTransform: "none",
                    textAlign: "center",
                    textDecoration: "none",

                    width: "100%",
                    display: "block",
                    "&:hover": {
                      backgroundColor: "#C4C450",
                    },
                  }}
                >
                  DONE
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default WorkoutCompleted;
