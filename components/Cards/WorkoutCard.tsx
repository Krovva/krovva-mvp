import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface WorkoutCardProps {
  calories: number;
  minutes: number;
  level: string;
  category: string;
  weight: string;
}

export default function WorkoutCard({
  calories,
  minutes,
  level,
  category,
  weight,
}: WorkoutCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '24px', // Aumentamos el padding para extender el alto del card
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {/* Primera fila: Calorías y Tiempo */}
      <Stack direction="row" spacing={4} alignItems="center" justifyContent="center" mb={4}>
        {/* Calorías */}
        <Stack direction="row" spacing={1} alignItems="center">
          <LocalFireDepartmentIcon sx={{ color: 'orange' }} />
          <Typography variant="body1" fontWeight="bold" color="black">
            {calories} kcal
          </Typography>
        </Stack>

        {/* Tiempo */}
        <Stack direction="row" spacing={1} alignItems="center">
          <AccessTimeIcon sx={{ color: 'gray' }} />
          <Typography variant="body1" fontWeight="bold" color="black">
            {minutes} min
          </Typography>
        </Stack>
      </Stack>

      {/* Segunda fila: Level, Category y Weight */}
      <Stack direction="row" spacing={4} alignItems="center" justifyContent="center">
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
              backgroundColor: '#f0f0f0', // Gris claro
              borderRadius: '8px',
              padding: '12px 16px', // Aumentamos el padding para más espacio interno
              width: '100px', // Ancho fijo para que sea cuadrado
              textAlign: 'center',
            }}
          >
            <Typography variant="body2" color="black"> {/* Texto en negro */}
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
              backgroundColor: '#f0f0f0', // Gris claro
              borderRadius: '8px',
              padding: '12px 16px', // Aumentamos el padding para más espacio interno
              width: '100px', // Ancho fijo para que sea cuadrado
              textAlign: 'center',
            }}
          >
            <Typography variant="body2" color="black"> {/* Texto en negro */}
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
              backgroundColor: '#f0f0f0', // Gris claro
              borderRadius: '8px',
              padding: '12px 16px', // Aumentamos el padding para más espacio interno
              width: '100px', // Ancho fijo para que sea cuadrado
              textAlign: 'center',
            }}
          >
            <Typography variant="body2" color="black"> {/* Texto en negro */}
              {weight}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}