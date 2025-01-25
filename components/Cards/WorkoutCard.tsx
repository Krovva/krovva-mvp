import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface Exercise {
  name: string;
  calories: number;
  time: number;
  level: string;
  image: string;
}

interface WorkoutCardProps {
  calories: number;
  minutes: number;
  level: string;
  category: string;
  weight: string;
  title?: string; 
  description?: string; 
  exercises?: Exercise[]; 
}

export default function WorkoutCard({
  calories,
  minutes,
  level,
  category,
  weight,
  title,
  description,
  exercises,
}: WorkoutCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '24px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {/* First line: kcal and time */}
      <Stack direction="row" spacing={4} alignItems="center" justifyContent="center" mb={4}>
        {/* kcal */}
        <Stack direction="row" spacing={1} alignItems="center">
          <LocalFireDepartmentIcon sx={{ color: 'black' }} />
          <Typography variant="body1" color="black">
            {calories} kcal
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body1" color="black">
            |
          </Typography>
        </Stack>

        {/* time */}
        <Stack direction="row" spacing={1} alignItems="center">
          <AccessTimeIcon sx={{ color: 'black' }} />
          <Typography variant="body1" color="black">
            {minutes} min
          </Typography>
        </Stack>
      </Stack>

      {/* Second line: Level, Category and Weight */}
      <Stack direction="row" spacing={4} alignItems="center" justifyContent="center" mb={4}>
        {/* Level */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary" mb={1}>
            Level
          </Typography>
          <Box
            sx={{
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
              padding: '12px 16px',
              width: '100px',
              textAlign: 'center',
            }}
          >
            <Typography variant="body2" color="black">
              {level}
            </Typography>
          </Box>
        </Box>

        {/* Category */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary" mb={1}>
            Category
          </Typography>
          <Box
            sx={{
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
              padding: '12px 16px',
              width: '100px',
              textAlign: 'center',
            }}
          >
            <Typography variant="body2" color="black">
              {category}
            </Typography>
          </Box>
        </Box>

        {/* Weight */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary" mb={1}>
            Weight
          </Typography>
          <Box
            sx={{
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
              padding: '12px 16px',
              width: '100px',
              textAlign: 'center',
            }}
          >
            <Typography variant="body2" color="black">
              {weight}
            </Typography>
          </Box>
        </Box>
      </Stack>

      {/* title and description */}
      {title && (
        <Typography variant="h6" fontWeight="bold" color="black" mb={2} textAlign="left"> 
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="body2" color="text.secondary" mb={4} textAlign="left"> 
          {description}
        </Typography>
      )}

      {/* Exercises list */}
      {exercises && (
        <Stack spacing={3}>
          {exercises.map((exercise, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                padding: '16px',
                display: 'flex', 
                alignItems: 'center', 
              }}
            >
              {/* Box with the image for each workout */}
              <Box
                sx={{
                  backgroundColor: '#f0f0f0',
                  borderRadius: '8px',
                  padding: '8px',
                  marginRight: '16px', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={exercise.image} 
                  alt={exercise.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover', 
                    borderRadius: '8px', 
                  }}
                />
              </Box>

              {/* box with exercise information */}
              <Box sx={{ flex: 1 }}>
                {/* name */}
                <Typography variant="h6" fontWeight="bold" color="black" mb={1}>
                  {exercise.name}
                </Typography>

                {/* kcal and time */}
                <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                  {/* Calorías */}
                  <Stack direction="row" spacing={1} alignItems="center">
                    <LocalFireDepartmentIcon sx={{ color: 'text.secondary', fontSize: '16px' }} />
                    <Typography variant="body1" color="text.secondary">
                      {exercise.calories} kcal
                    </Typography>
                  </Stack>

                  {/* separator */}
                  <Typography variant="body1" color="text.secondary">
                    |
                  </Typography>

                  {/* time */}
                  <Stack direction="row" spacing={1} alignItems="center">
                    <AccessTimeIcon sx={{ color: 'text.secondary', fontSize: '16px' }} />
                    <Typography variant="body1" color="text.secondary">
                      {exercise.time} min
                    </Typography>
                  </Stack>
                </Stack>

                {/* level */}
                <Typography variant="body2" color="text.secondary">
                  {exercise.level}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      )}
      {/* Button "START NOW" */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#D5D962', 
            color: 'white',
            borderRadius: '12px',
            padding: '16px', 
            fontWeight: 'bold',
            fontSize: '16px',
            textTransform: 'none', 
            width: '100%',
            '&:hover': {
              backgroundColor: '#C4C450', 
            },
          }}
          onClick={() => console.log('Start workout')} //Change to the function that starts the workout
        >
          START NOW
        </Button>
      </Box>
    </Box>
  );
}