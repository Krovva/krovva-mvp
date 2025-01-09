'use client';
import { Box, Button, Typography, IconButton, LinearProgress, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function HeightSelectionPage() {
  const [unit, setUnit] = useState('cm');
  const [height, setHeight] = useState(170);

  const handleUnitChange = (event, newUnit) => {
    if (newUnit !== null) {
      setUnit(newUnit);
    }
  };

  const handleHeightChange = (newHeight) => {
    setHeight(newHeight);
  };

  const renderScale = () => {
    const scaleMarks = [];
    for (let i = 140; i <= 200; i += 1) {
      const isMajor = i % 10 === 0;
      scaleMarks.push(
        <Box
          key={i}
          sx={{
            height: isMajor ? '30px' : '15px',
            width: isMajor ? '2px' : '1px',
            bgcolor: 'white',
            margin: '0 5px',
            display: 'inline-block',
          }}
        />
      );
    }
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflowX: 'auto',
          overflowY: 'hidden',
          whiteSpace: 'nowrap',
          mt: 3,
          width: '100%',
          pb: 2,
        }}
      >
        {scaleMarks.map((mark, index) => (
          <Box
            key={index}
            sx={{
              textAlign: 'center',
              cursor: 'pointer',
              color: 'white',
            }}
            onClick={() => handleHeightChange(140 + index)}
          >
            {mark}
            {index % 10 === 0 && (
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  mt: 1,
                  fontSize: '12px',
                  color: 'white',
                }}
              >
                {140 + index}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    );
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
      {/* Progress Bar */}
      <Box
        sx={{
          width: "30%",
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          height: "100px",
          borderRadius: "8px",
          overflow: "hidden"
        }}
      >
        <LinearProgress
          variant="determinate"
          value={60} // Simulating progress (60%)
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
        sx={{ fontWeight: 700, mb: 5, textAlign: "center", mt: -10 }}
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
          borderRadius: "50px", // Fully rounded
          overflow: "hidden",
          width: "200px", // Adjust group size
          height: "50px", // Adjust height for proportional look
          margin: "20px auto", // Center the component
        }}
      >
        <ToggleButton
          value="inches"
          sx={{
            flex: 1, // Allow buttons to occupy equal space
            "&.Mui-selected": {
              bgcolor: "black", // Black background when selected
              color: "white", // White text
            },
            borderRadius: 0, // No additional borders
          }}
        >
          inches
        </ToggleButton>
        <ToggleButton
          value="cm"
          sx={{
            flex: 1, // Allow buttons to occupy equal space
            "&.Mui-selected": {
              bgcolor: "black", // Black background when selected
              color: "white", // White text
            },
            borderRadius: 0, // No additional borders
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
          width: "90%",
          textAlign: "center",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 700 }}>{height}</Typography>
        <Typography sx={{ color: "#D5D962" }}>{unit}</Typography>
        {renderScale()}
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
          bottom: "30px"
        }}
      >
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

        <Button
          variant="contained"
          sx={{
            bgcolor: "#D5D962",
            color: "black",
            borderRadius: "12px",
            py: 2,
            px: 10,
            fontSize: "18px",
            fontWeight: 700
          }}
        >
          Next
          <ArrowForwardIosIcon sx={{ fontSize: 18, ml: 1 }} />
        </Button>
      </Box>
    </Box>
  );
}
