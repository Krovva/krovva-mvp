import { Box, Stack, Typography } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Exercise } from "@/src/@types/workout.entity";

interface DetailedWorkoutExerciseProps {
  exercise: Exercise;
  index: number;
  isInCompleted?: boolean;
}

const DetailedWorkoutExercise = ({
  exercise,
  index,
  isInCompleted,
}: DetailedWorkoutExerciseProps) => {
  return (
    <>
      {/* Exercises list */}
      <Box
        key={index}
        sx={{
          backgroundColor: isInCompleted ? "white" : "#1E1D20",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {isInCompleted && (
          <Box
            sx={{
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              padding: "8px",
              marginRight: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={exercise.image}
              alt={exercise.name}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>
        )}

        {/* box with exercise information */}
        <Box sx={{ flex: 1 }}>
          {/* name */}
          <Typography
            variant="h6"
            fontWeight="bold"
            color={`${isInCompleted ? "#1E1D20" : "white"}`}
            mb={1}
          >
            {exercise.name}
          </Typography>

          {/* kcal and time */}
          <Stack direction="row" spacing={2} alignItems="center" mb={1}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                }}
              >
                {/* Calories */}
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocalFireDepartmentIcon
                    sx={{ color: "gray", fontSize: "16px" }}
                  />
                  <Typography
                    variant="body2"
                    color={`${isInCompleted ? "#1E1D20" : "white"}`}
                  >
                    {exercise.calories} kcal
                  </Typography>
                </Stack>

                {/* separator */}
                <Typography
                  variant="body2"
                  color={`${isInCompleted ? "#1E1D20" : "white"}`}
                >
                  |
                </Typography>

                {/* time */}
                <Stack direction="row" spacing={1} alignItems="center">
                  <AccessTimeIcon sx={{ color: "gray", fontSize: "16px" }} />
                  <Typography
                    variant="body2"
                    color={`${isInCompleted ? "#1E1D20" : "white"}`}
                  >
                    {exercise.time} min
                  </Typography>
                </Stack>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                }}
              >
                {/* Rest */}
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocalFireDepartmentIcon
                    sx={{ color: "gray", fontSize: "16px" }}
                  />
                  <Typography
                    variant="body2"
                    color={`${isInCompleted ? "#1E1D20" : "white"}`}
                  >
                    {exercise.rest} rest
                  </Typography>
                </Stack>

                {/* separator */}
                <Typography
                  variant="body2"
                  color={`${isInCompleted ? "#1E1D20" : "white"}`}
                >
                  |
                </Typography>

                {/* Reps */}
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocalFireDepartmentIcon
                    sx={{ color: "gray", fontSize: "16px" }}
                  />
                  <Typography
                    variant="body2"
                    color={`${isInCompleted ? "#1E1D20" : "white"}`}
                  >
                    {exercise.reps} reps
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Stack>

          {/* level */}
          <Typography
            variant="body2"
            mt={2}
            color={`${isInCompleted ? "#1E1D20" : "white"}`}
          >
            {exercise.level}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default DetailedWorkoutExercise;
