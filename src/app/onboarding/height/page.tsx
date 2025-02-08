"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
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
  const [unit, setUnit] = useState<"inches" | "cm">("cm");
  const [height, setHeight] = useState(170);
  const scaleContainerRef = useRef<HTMLDivElement | null>(null);

  const minHeight = 140;
  const maxHeight = 200;
  const markWidth = 7;

  const handleUnitChange = (
    event: React.MouseEvent<HTMLElement>,
    newUnit: "inches" | "cm",
  ) => {
    if (newUnit !== null) {
      setUnit(newUnit);
    }
  };

  const handleHeightChange = (newHeight: number) => {
    if (newHeight >= minHeight && newHeight <= maxHeight) {
      setHeight(newHeight);
      updateScroll(newHeight);
    }
  };

  const updateScroll = (value: number) => {
    if (scaleContainerRef.current) {
      const containerWidth = scaleContainerRef.current.offsetWidth;
      const scrollPosition =
        (value - minHeight) * markWidth - containerWidth / 2 + markWidth / 2;
      scaleContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const renderScale = () => {
    const scaleMarks = [];
    for (let i = minHeight; i <= maxHeight; i += 1) {
      const isMajor = i % 10 === 0;
      const isSelected = i === height;
      scaleMarks.push(
        <Box
          key={i}
          onClick={() => handleHeightChange(i)}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: `${markWidth}px`,
            cursor: "pointer",
            position: "relative",
          }}
        >
          <Box
            sx={{
              height: isMajor ? "50px" : "15px",
              width: isMajor ? "3px" : "1.5px",
              bgcolor: isSelected ? "#D5D962" : "white",
              transition: "background-color 0.2s",
            }}
          />
          {isMajor && (
            <Typography
              variant="caption"
              sx={{
                display: "block",
                mt: 1,
                fontSize: "10px",
                color: "white",
                position: "absolute",
                bottom: "-20px",
                width: "30px",
                textAlign: "center",
              }}
            >
              {i}
            </Typography>
          )}
        </Box>,
      );
    }
    return (
      <Box
        ref={scaleContainerRef}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          overflowX: "scroll",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          mt: 3,
          width: "100%",
          height: "100px",
          pb: 2,
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": { display: "none" },
          position: "relative",
        }}
        onScroll={(e) => {
          const scrollLeft = (e.target as HTMLDivElement).scrollLeft;
          const newHeight = Math.round(scrollLeft / markWidth) + minHeight;
          if (
            newHeight >= minHeight &&
            newHeight <= maxHeight &&
            newHeight !== height
          ) {
            setHeight(newHeight);
          }
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            height: "15px",
            width: "3px",
            bgcolor: "#D5D962",
            transform: "translateX(-50%)",
            zIndex: 1,
            bottom: "35px",
          }}
        />
        <Box
          sx={{
            display: "inline-flex",
            paddingLeft: "50%",
            paddingRight: "50%",
          }}
        >
          {scaleMarks}
        </Box>
      </Box>
    );
  };

  useEffect(() => {
    if (scaleContainerRef.current) {
      const containerWidth = scaleContainerRef.current.offsetWidth;
      const scrollPosition =
        (height - minHeight) * markWidth - containerWidth / 2 + markWidth / 2;
      scaleContainerRef.current.scrollLeft = scrollPosition;
    }
  }, []);

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
          margin: "15px auto",
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

      <Box
        sx={{
          bgcolor: "black",
          color: "#D5D962",
          borderRadius: "43.912px",
          p: 4,
          width: "350.299px",
          maxWidth: "281.437px",
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
        <Typography sx={{ color: "#D5D962", fontSize: "14px" }}>
          {unit}
        </Typography>
        {renderScale()}
      </Box>

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
