"use client";

import React, { useState } from "react";
import { Box, Typography, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const categories = [
  { name: "Yoga", image: "/Categories/yoga.png" },
  { name: "Gym", image: "/Categories/lifting.png" },
  { name: "Cardio", image: "/Categories/cardio.png" },
  { name: "Stretch", image: "/Categories/stretch.png" },
  { name: "Full Body", image: "/Categories/fullbody.png" },
  { name: "Legs", image: "/Categories/legs.png" },
];

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar las categorías basadas en el término de búsqueda
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        py: 2,
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, fontSize: "24px", mb: 3 }}
      >
        Categories
      </Typography>

      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "#F5F5F5",
          borderRadius: "50px",
          px: 2,
          py: 1,
          mb: 4,
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <SearchIcon sx={{ color: "gray", mr: 1 }} />
        <InputBase
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el estado de búsqueda
          sx={{ flex: 1, fontSize: "16px", color: "black" }}
        />
      </Box>

      {/* Categories Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "46px 23px", // 46px entre filas, 23px entre columnas
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <Link
              href={`/home/workouts/${category.name.toLowerCase().replace(/\s+/g, "")}`}
              key={category.name}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  style={{
                    width: "112px",
                    height: "112px",
                    marginBottom: "23px",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  {category.name}
                </Typography>
              </Box>
            </Link>
          ))
        ) : (
          <Typography
            sx={{
              gridColumn: "span 2",
              fontSize: "16px",
              color: "gray",
              textAlign: "center",
            }}
          >
            No categories found
          </Typography>
        )}
      </Box>
    </Box>
  );
}
