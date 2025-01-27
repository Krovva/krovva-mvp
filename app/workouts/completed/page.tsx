import Workout from "@/components/workout";
import Box from "@mui/material/Box";

export default function WorkoutDetailsPage() {
  const data = {
    progress: 70,
    // duration:0,
    completed: 6,
    // calories:0,
    // weight:0,
    // tutAccuracy:0,
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "white",
        color: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 3,
        py: 5,
        justifyItems: "center",
      }}
    >
      <Workout progress={data.progress} completed={data.completed} />
    </Box>
  );
}
