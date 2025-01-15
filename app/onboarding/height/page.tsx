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

export default function HeightSelectionPage() {
  // Define the type of the state
  const [unit, setUnit] = useState<"inches" | "cm">("cm");
  const [height, setHeight] = useState(170);
  const scaleContainerRef = useRef<HTMLDivElement | null>(null);

  const minHeight = 140;
  const maxHeight = 200;
  const markWidth = 7; // Spacing between marks in pixels

  // 2. Type the function
  const handleUnitChange = (
    event: React.MouseEvent<HTMLElement>,
    newUnit: "inches" | "cm"
  ) => {
    if (newUnit !== null) {
      setUnit(newUnit);
    }
  };

  const renderScale = () => {
    const scaleMarks = [];
    for (let i = minHeight; i <= maxHeight; i += 1) {
      const isMajor = i % 10 === 0;
      scaleMarks.push(
        <Box
          key={i}
          sx={{
            height: isMajor ? "50px" : "15px",
            width: isMajor ? "3px" : "1.5px",
            bgcolor: "white",
            margin: "0 8px",
            display: "inline-block",
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
          overflowY: "hidden",
          whiteSpace: "nowrap",
          mt: 3,
          width: "100%",
          pb: 2,
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": { display: "none" },
        }}
        onScroll={(e) => {
          const scrollLeft = (e.target as HTMLDivElement).scrollLeft;
          const newHeight = minHeight + Math.round(scrollLeft / markWidth);
          if (newHeight >= minHeight && newHeight <= maxHeight && newHeight !== height) {
            setHeight(newHeight);
          }
        }}
      >
        {scaleMarks.map((mark, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              color: "white",
              scrollSnapAlign: "center",
            }}
          >
            {mark}
            {(minHeight + index) % 10 === 0 && (
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  mt: 1,
                  fontSize: "10px",
                  color: "white",
                }}
              >
                {minHeight + index}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    );
  };

  useEffect(() => {
    if (scaleContainerRef.current) {
      const initialScrollLeft = (height - minHeight) * markWidth;
      scaleContainerRef.current.scrollLeft = initialScrollLeft;
    }
  }, [height]);

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
        What is your height?
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
          value="inches"
          sx={{
            flex: 1,
            "&.Mui-selected": {
              bgcolor: "black",
              color: "white",
            },
            borderRadius: 0,
          }}
        >
          inches
        </ToggleButton>
        <ToggleButton
          value="cm"
          sx={{
            flex: 1,
            "&.Mui-selected": {
              bgcolor: "black",
              color: "white",
            },
            borderRadius: 0,
          }}
        >
          cm
        </ToggleButton>
      </ToggleButtonGroup>

      {/* Height Display */}
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
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 700, fontSize: "40px" }}>
          {height}
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
