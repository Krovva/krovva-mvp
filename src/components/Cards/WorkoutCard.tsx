"use client";

import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface WorkoutCardProps {
  name: string;
  description: string;
  image: string;
  handleWorkoutSelected: () => void;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  name,
  description,
  image,
  handleWorkoutSelected,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center",
        backgroundColor: "#2B2A2D",
        borderRadius: "15px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          src={image}
          alt={name}
          style={{
            width: "30%",
            height: "100%",
            borderRadius: "10px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "60%",
            px: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, fontSize: "16px", mb: 1 }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "gray", fontSize: "14px", mb: 1 }}
          >
            {description}
          </Typography>
        </Box>
        <div className="w-1/12">
          <IconButton
            onClick={handleWorkoutSelected}
            sx={{
              marginLeft: "auto",
              backgroundColor: "#F7F7F7",
              borderRadius: "50%",
              boxShadow: "0px 4px 6px #00729840",
              "&:hover": {
                backgroundColor: "#F7F7F7",
              },
              width: "28px",
              height: "28px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
              marginRight: "15px",
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 20, color: "black" }} />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
};

export default WorkoutCard;
