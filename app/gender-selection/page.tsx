"use client";
import { Box, Button, Typography, IconButton, LinearProgress, Radio } from "@mui/material";
import { useState } from 'react';
import Image from 'next/image';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function GenderSelectionPage() {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleSelect = (gender: string) => {
    setSelectedGender(gender);
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
        justifyContent: "center",
        px: 3,
        position: "relative"
      }}
    >
      {/* Barra de Progreso (Superior) */}
      <Box
        sx={{
          width: "30%",  // La barra será más pequeña (aprox. 30% del ancho)
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          height: "6px",
          borderRadius: "8px",
          overflow: "hidden"
        }}
      >
        <LinearProgress
          variant="determinate"
          value={40}  // Simulación de progreso (40%)
          sx={{
            bgcolor: "#333333",  // Fondo de la barra (gris oscuro)
            "& .MuiLinearProgress-bar": {
              bgcolor: "#D5D962",  // Color verde del progreso
            }
          }}
        />
      </Box>

      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: 700, mb: 5, textAlign: "center", mt: -17 }}  // Reducido el margen superior
      >
        Welcome To Achieving Your Dream
      </Typography>

      {/* Sección de Selección de Género */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%", mt: -2 }}>
        
        {/* Male Selection Card */}
        <Box
          onClick={() => handleSelect('male')}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "#000",
            color: "white",
            p: 2,
            borderRadius: 3,
            cursor: "pointer"
          }}
        >
          <Box>
            <Typography>Your Gender <span style={{ color: "#D5D962" }}>(Male)</span></Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Image 
              src="/Gender images/Male image.png" 
              alt="Male" 
              width={90} 
              height={100} 
              style={{ borderRadius: "10px" }} 
            />
            <Radio
              checked={selectedGender === 'male'}
              onChange={() => handleSelect('male')}
              value="male"
              sx={{
                color: "#D5D962",
                '&.Mui-checked': {
                  color: "#D5D962",
                },
              }}
            />
          </Box>
        </Box>

        {/* Female Selection Card */}
        <Box
          onClick={() => handleSelect('female')}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "#FFFFFF",
            color: "black",
            p: 2,
            borderRadius: 3,
            cursor: "pointer"
          }}
        >
          <Box>
            <Typography>Your Gender <span style={{ color: "#D5D962" }}>(Female)</span></Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Image 
              src="/Gender images/Female image.png" 
              alt="Female" 
              width={90} 
              height={100} 
              style={{ borderRadius: "10px" }} 
            />
            <Radio
              checked={selectedGender === 'female'}
              onChange={() => handleSelect('female')}
              value="female"
              sx={{
                color: "#D5D962",
                '&.Mui-checked': {
                  color: "#D5D962",
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Botones de Navegación */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
          width: "90%",
          position: "absolute",
          bottom: "30px"
        }}
      >
        {/* Botón Retroceso */}
        <IconButton
          sx={{
            border: "2px solid black",
            borderRadius: "12px",
            width: "60px",
            height: "60px"
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 22, color: "#000000" }} />
        </IconButton>

        {/* Botón Next */}
        <Button
          variant="contained"
          sx={{
            bgcolor: "#D5D962",
            color: "black",
            borderRadius: "12px",
            py: 2,
            px: 10,
            fontSize: "18px",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          Next
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <ArrowForwardIosIcon sx={{ fontSize: 14, color: "#aaa"}} />
            <ArrowForwardIosIcon sx={{ fontSize: 16, color: "#bbb"  }} />
            <ArrowForwardIosIcon sx={{ fontSize: 18}} />
                    {/* simbolos */}

          </Box>
        </Button>
      </Box>
    </Box>
  );
}
