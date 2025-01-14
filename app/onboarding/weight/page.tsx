"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  LinearProgress,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function WeightSelectionPage() {
  const [unit, setUnit] = useState<"lb" | "kg">("kg");
  const [weight, setWeight] = useState(70);
  const scaleContainerRef = useRef<HTMLDivElement | null>(null);

  const minWeight = 40;
  const maxWeight = 150;
  const markWidth = 10;

  const handleUnitChange = (
    event: React.MouseEvent<HTMLElement>,
    newUnit: "lb" | "kg"
  ) => {
    if (newUnit !== null) {
      setUnit(newUnit);
    }
  };

  const renderScale = () => {
    const scaleMarks = [];
    for (let i = minWeight; i <= maxWeight; i++) {
      const isMajor = i % 10 === 0;
      scaleMarks.push(
        <Box
          key={i}
          sx={{
            height: isMajor ? "50px" : "20px",
            width: "2px",
            bgcolor: "white",
            margin: `0 ${markWidth / 2}px`,
          }}
        />
      );
    }
    return (
      <Box
        ref={scaleContainerRef}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowX: "scroll",
          whiteSpace: "nowrap",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          "&::-webkit-scrollbar": { display: "none" },
        }}
        onScroll={(e) => {
          const scrollLeft = (e.target as HTMLDivElement).scrollLeft;
          const newWeight = Math.round(scrollLeft / markWidth) + minWeight;
          if (
            newWeight >= minWeight &&
            newWeight <= maxWeight &&
            newWeight !== weight
          ) {
            setWeight(newWeight);
          }
        }}
      >
        {scaleMarks.map((mark, index) => (
          <Box
            key={index}
            sx={{
              scrollSnapAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {mark}
            {(minWeight + index) % 10 === 0 && (
              <Typography
                variant="caption"
                sx={{
                  mt: 1,
                  color: "white",
                  fontSize: "12px",
                }}
              >
                {minWeight + index}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    );
  };

  useEffect(() => {
    if (scaleContainerRef.current) {
      const initialScrollLeft = (weight - minWeight) * markWidth;
      scaleContainerRef.current.scrollLeft = initialScrollLeft;
    }
  }, [weight]);

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
          width: "80%",
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          height: "10px",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <LinearProgress
          variant="determinate"
          value={60}
          sx={{
            bgcolor: "#333333",
            "& .MuiLinearProgress-bar": {
              bgcolor: "#D5D962",
            },
          }}
        />
      </Box>

      <Typography
        variant="h5"
        component="h1"
        sx={{
          fontWeight: 700,
          mb: 5,
          textAlign: "center",
          mt: 2,
          fontSize: "20px",
        }}
      >
        What is your weight?
      </Typography>

      {/* Unit Selection */}
      <ToggleButtonGroup
        value={unit}
        exclusive
        onChange={handleUnitChange}
        sx={{
          display: "flex",
          border: "2px solid black",
          borderRadius: "50px",
          overflow: "hidden",
          width: "200px",
          height: "40px",
          margin: "10px auto",
        }}
      >
        <ToggleButton
          value="lb"
          sx={{
            flex: 1,
            "&.Mui-selected": {
              bgcolor: "black",
              color: "white",
            },
            borderRadius: 0,
          }}
        >
          lb
        </ToggleButton>
        <ToggleButton
          value="kg"
          sx={{
            flex: 1,
            "&.Mui-selected": {
              bgcolor: "black",
              color: "white",
            },
            borderRadius: 0,
          }}
        >
          kg
        </ToggleButton>
      </ToggleButtonGroup>

      {/* Weight Display */}
      <Box
        sx={{
          bgcolor: "black",
          color: "#D5D962",
          borderRadius: "20px",
          p: 4,
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 700, fontSize: "40px" }}>
          {weight}
        </Typography>
        <Typography sx={{ color: "#D5D962", fontSize: "14px" }}>{unit}</Typography>
        {renderScale()}
      </Box>

      {/* Navigation Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          width: "90%",
          position: "absolute",
          bottom: "20px",
        }}
      >
        <IconButton
          sx={{
            border: "2px solid black",
            borderRadius: "12px",
            width: "50px",
            height: "50px",
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 18, color: "#000000" }} />
        </IconButton>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#D5D962",
            color: "black",
            borderRadius: "12px",
            py: 1,
            px: 8,
            fontSize: "16px",
            fontWeight: 700,
          }}
        >
          Next
          <ArrowForwardIosIcon sx={{ fontSize: 16, ml: 1 }} />
        </Button>
      </Box>
    </Box>
  );
}
