"use client";

import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/src/constants/mocks/WorkoutCategories";

export default function Home() {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: "389px",
          backgroundColor: "#0D0D0D",
          borderRadius: "20px",
          padding: 2,
          marginBottom: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
          >
            This Week
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "12px",
              color: "#FFFFFF",
              opacity: 0.7,
            }}
          >
            {selectedDays.length}/7 Days
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <Box
              key={day}
              onClick={() => toggleDay(day)}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                width: "40px",
                height: "69px",
                padding: "12px 9px",
                justifyContent: "center",
                backgroundColor: selectedDays.includes(day)
                  ? "#2B2A2D"
                  : "#F8F8F8",
                borderRadius: "200px",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  color: selectedDays.includes(day) ? "#FFFFFF" : "#2B2A2D",
                }}
              >
                {day}
              </Typography>
              <Image
                src={
                  selectedDays.includes(day)
                    ? "/icons/checkbox-circle-selected.svg"
                    : "/icons/checkbox-circle-nonselect.svg"
                }
                alt="Check"
                width={17}
                height={17}
                style={{ marginTop: "8px" }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: "389px",
          backgroundColor: "#8D9164",
          borderRadius: "20px",
          padding: "14px 20px",
          marginBottom: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "16px", sm: "20px" },
              color: "#FFFFFF",
              marginBottom: "8px",
            }}
          >
            BMI (Body Mass Index)
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginTop: 1,
              fontSize: { xs: "12px", sm: "14px" },
              color: "#FFFFFF",
            }}
          >
            You have a normal weight
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: "#FFFFFF",
              color: "#0D0D0D",
              textTransform: "none",
              borderRadius: "10px",
              padding: { xs: "6px 12px", sm: "8px 16px" },
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#E8E8E8",
              },
            }}
          >
            View More
          </Button>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "119px",
            height: "115px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/icons/Banner--Pie-Ellipse.svg"
            alt="Pie Chart"
            layout="fill"
          />
          <Typography
            sx={{
              position: "absolute",
              top: "30%",
              left: "65%",
              transform: "translate(-50%, -50%)",
              fontWeight: "bold",
              fontSize: "12px",
              color: "#FFFFFF",
            }}
          >
            20,1
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: "389px",
          marginTop: 4,
          marginBottom: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
            color: "#FFFFFF",
          }}
        >
          Categories
        </Typography>
        <Link href="/home/categories">
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              color: "#D6D984",
              transform: "translateX(-20px)",
              textTransform: "none",
            }}
          >
            See all
          </Typography>
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          width: "100%",
          maxWidth: "389px",
          paddingBottom: 2,
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {categories.map((category, index) => {
          const colors = [
            { bgColor: "#D6D984", textColor: "#000000" },
            { bgColor: "#2B2A2D", textColor: "#FFFFFF" },
            { bgColor: "#FFFFFF", textColor: "#000000" },
          ];

          const { bgColor, textColor } = colors[index % 3];

          return (
            <Link href={`/home/workouts/category/${category.name}`} key={index}>
              <Box
                key={index}
                sx={{
                  minWidth: "120px",
                  height: "190px",
                  borderRadius: "15px",
                  backgroundColor: bgColor,
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "10px",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    color: textColor,
                    marginBottom: "10px",
                    textTransform: "uppercase",
                  }}
                >
                  {category.name}
                </Typography>
                <Image
                  src={category.coverImage}
                  alt={category.name}
                  width={100}
                  height={100}
                  style={{
                    position: "absolute",
                    top: "36px",
                    right: "0",
                    borderRadius: "10px",
                  }}
                />
              </Box>
            </Link>
          );
        })}
      </Box>
    </>
  );
}
