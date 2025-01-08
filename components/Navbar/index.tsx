import { Box, IconButton, useTheme } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home"; // Reemplazar con tus íconos
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Navbar() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        bgcolor: "#2B2A2D",
        borderRadius: "44.91px",
        height: "90px",
        padding: "0 10px",
      }}
    >
      {/* Icono 1 */}
      <IconButton
        sx={{
          bgcolor: "#363636", // Fondo oscuro para el icono
          width: "81.836px",
          height: "81.836px",
          borderRadius: "50%",
          "&:hover": {
            bgcolor: "#464646",
          },
        }}
      >
        <HomeIcon sx={{ color: "white", fontSize: "32px" }} />
      </IconButton>

      {/* Icono 2 */}
      <IconButton
        sx={{
          bgcolor: "#363636",
          width: "81.836px",
          height: "81.836px",
          borderRadius: "50%",
          "&:hover": {
            bgcolor: "#464646",
          },
        }}
      >
        <FitnessCenterIcon sx={{ color: "white", fontSize: "32px" }} />
      </IconButton>

      {/* Icono 3 */}
      <IconButton
        sx={{
          bgcolor: "#363636",
          width: "81.836px",
          height: "81.836px",
          borderRadius: "50%",
          "&:hover": {
            bgcolor: "#464646",
          },
        }}
      >
        <BarChartIcon sx={{ color: "white", fontSize: "32px" }} />
      </IconButton>

      {/* Icono 4 */}
      <IconButton
        sx={{
          bgcolor: "#F5F2B8", // Color verde para el seleccionado
          width: "81.836px",
          height: "81.836px",
          borderRadius: "50%",
          "&:hover": {
            bgcolor: "#E3E0A8",
          },
        }}
      >
        <SettingsIcon sx={{ color: "#5F5F5F", fontSize: "32px" }} />
      </IconButton>
    </Box>
  );
}
