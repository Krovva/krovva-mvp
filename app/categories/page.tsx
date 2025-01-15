"use client";

import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Grid,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const categories = [
  { label: "Yoga", image: "/Categories/yoga.png" },
  { label: "Gym", image: "/Categories/lifting.png" },
  { label: "Cardio", image: "/Categories/fullbody.png" },
  { label: "Stretch", image: "/Categories/stretch.png" },
  { label: "Legs", image: "/Categories/legs.png" },
];

export default function CategoriesPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "white",
        px: 3,
        py: 5,
      }}
    >
      {/* Header */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 3,
          textAlign: "center",
        }}
      >
        Categories
      </Typography>

      {/* Search Bar */}
      <TextField
        fullWidth
        placeholder="Search"
        variant="outlined"
        sx={{
          mb: 3,
          bgcolor: "white",
          borderRadius: "10px",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Categories Grid */}
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid item xs={6} sm={4} key={index} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
                mx: "auto",
                mb: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={category.image}
                alt={category.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {category.label}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Navigation Bar */}
      <Box
        sx={{
          position: "fixed",
          bottom: "20px",
          left: 0,
          right: 0,
          mx: "auto",
          width: "90%",
          bgcolor: "black",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          py: 2,
          px: 3,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <IconButton sx={{ color: "white" }}>
          <i className="fas fa-th"></i>
        </IconButton>
        <IconButton sx={{ color: "white", bgcolor: "#D5D962", p: 1 }}>
          <i className="fas fa-dumbbell"></i>
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <i className="fas fa-chart-bar"></i>
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <i className="fas fa-cog"></i>
        </IconButton>
      </Box>
    </Box>
  );
}
