"use client";
import {
  Box,
  Button,
  Typography,
  IconButton,
  LinearProgress,
  Radio,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function GenderSelectionPage() {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  const getCardStyles = (gender: string) => ({
    bgcolor: selectedGender === gender ? "#000" : "#FFFFFF",
    color: selectedGender === gender ? "white" : "black",
    px: 2,
    borderRadius: 3,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: selectedGender === gender ? "1px solid #D5D962" : "none",
  });

  const getImageStyles = (gender: string) => ({
    filter: selectedGender === gender ? "none" : "grayscale(100%)",
    borderRadius: "10px",
  });

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
        position: "relative",
      }}
    >
      {/* Progress Bar */}
      <Box
        sx={{
          width: "30%",
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          height: "6px",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <LinearProgress
          variant="determinate"
          value={40}
          sx={{
            bgcolor: "#333333",
            "& .MuiLinearProgress-bar": {
              bgcolor: "#D5D962",
            },
          }}
        />
      </Box>

      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: 700, mb: 5, textAlign: "center", mt: -17 }}
      >
        Welcome To Achieving Your Dream
      </Typography>

      {/* Gender Selection Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
          mt: -2,
        }}
      >
        {/* Male Card */}
        <Box onClick={() => handleSelect("male")} sx={getCardStyles("male")}>
          <Box>
            <Typography>
              Your Gender <span style={{ color: "#D5D962" }}>(Male)</span>
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Image
              src="/Gender images/Male image.png"
              alt="Male"
              width={90}
              height={100}
              style={getImageStyles("male")}
            />
            <Radio
              checked={selectedGender === "male"}
              onChange={() => handleSelect("male")}
              value="male"
              sx={{
                color: "#D5D962",
                "&.Mui-checked": {
                  color: "#D5D962",
                },
              }}
            />
          </Box>
        </Box>

        {/* Female Card */}
        <Box
          onClick={() => handleSelect("female")}
          sx={getCardStyles("female")}
        >
          <Box>
            <Typography>
              Your Gender <span style={{ color: "#D5D962" }}>(Female)</span>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Image
              src="/Gender images/Female image.png"
              alt="Female"
              width={90}
              height={100}
              style={getImageStyles("female")}
            />
            <Radio
              checked={selectedGender === "female"}
              onChange={() => handleSelect("female")}
              value="female"
              sx={{
                color: "#D5D962",
                "&.Mui-checked": {
                  color: "#D5D962",
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Navigation Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
          width: "90%",
          position: "absolute",
          bottom: "30px",
        }}
      >
        <IconButton
          sx={{
            border: "2px solid black",
            borderRadius: "12px",
            width: "60px",
            height: "60px",
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 22, color: "#000000" }} />
        </IconButton>

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
            <ArrowForwardIosIcon sx={{ fontSize: 14, color: "#aaa" }} />
            <ArrowForwardIosIcon sx={{ fontSize: 16, color: "#bbb" }} />
            <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
          </Box>
        </Button>
      </Box>
    </Box>
  );
}
