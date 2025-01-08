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
        px: { xs: 3, md: 6 },
        position: "relative",
        maxWidth: { md: "600px" },
        mx: "auto"
      }}
    >
      {/* Barra de Progreso (Superior) */}
      <Box
        sx={{
          width: { xs: "60%", sm: "50%", md: "40%" },
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
          value={40}
          sx={{
            bgcolor: "#333333",
            "& .MuiLinearProgress-bar": {
              bgcolor: "#D5D962",
            }
          }}
        />
      </Box>

      <Typography
        variant="h5"
        component="h1"
        sx={{ fontWeight: 700, mb: 3, textAlign: "center", mt: { xs: -10, md: -5 } }}
      >
        Welcome To Achieving Your Dream
      </Typography>

      {/* Sección de Selección de Género */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: { xs: "100%", md: "40%" }, mt: 0 }}>
        <Box
          onClick={() => handleSelect('male')}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "#000",
            color: "white",
            p: { xs: 2, md: 3 },
            borderRadius: 3,
            cursor: "pointer",
            flexDirection: { xs: "column", md: "row" }
          }}
        >
          <Box>
            <Typography>Your Gender <span style={{ color: "#D5D962" }}>(Male)</span></Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Image 
              src="/Gender images/Male image.png" 
              alt="Male" 
              width={70} 
              height={80} 
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

        <Box
          onClick={() => handleSelect('female')}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "#FFFFFF",
            color: "black",
            p: { xs: 2, md: 3 },
            borderRadius: 3,
            cursor: "pointer",
            flexDirection: { xs: "column", md: "row" }
          }}
        >
          <Box>
            <Typography>Your Gender <span style={{ color: "#D5D962" }}>(Female)</span></Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Image 
              src="/Gender images/Female image.png" 
              alt="Female" 
              width={70} 
              height={80} 
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

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
          width: "100%",
          position: "absolute",
          bottom: "30px"
        }}
      >
        <IconButton
          sx={{
            border: "2px solid black",
            borderRadius: "12px",
            width: "50px",
            height: "50px"
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 20, color: "#000000" }} />
        </IconButton>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#D5D962",
            color: "black",
            borderRadius: "12px",
            py: 1.5,
            px: 6,
            fontSize: "16px",
            fontWeight: 700
          }}
        >
          Next
          <Box sx={{ display: "flex", gap: 0.5, ml: 1 }}>
            <ArrowForwardIosIcon sx={{ fontSize: 14, color: "#aaa" }} />
            <ArrowForwardIosIcon sx={{ fontSize: 16, color: "#bbb" }} />
            <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
          </Box>
        </Button>
      </Box>
    </Box>
  );
}
