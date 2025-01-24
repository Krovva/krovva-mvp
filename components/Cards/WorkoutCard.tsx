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
  title?: string; // Campo opcional para el título
  description?: string; // Campo opcional para la descripción
  exercises?: Exercise[]; // Lista de ejercicios relacionados
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
      {/* Primera fila: Calorías y Tiempo */}
      <Stack direction="row" spacing={4} alignItems="center" justifyContent="center" mb={4}>
        {/* Calorías */}
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

        {/* Tiempo */}
        <Stack direction="row" spacing={1} alignItems="center">
          <AccessTimeIcon sx={{ color: 'black' }} />
          <Typography variant="body1" color="black">
            {minutes} min
          </Typography>
        </Stack>
      </Stack>

      {/* Segunda fila: Level, Category y Weight */}
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

      {/* Título y Descripción */}
      {title && (
        <Typography variant="h6" fontWeight="bold" color="black" mb={2} textAlign="left"> {/* Cambiado a 'left' */}
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="body2" color="text.secondary" mb={4} textAlign="left"> {/* Cambiado a 'left' */}
          {description}
        </Typography>
      )}

      {/* Lista de Ejercicios */}
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
                display: 'flex', // Usar flexbox para alinear imagen y contenido
                alignItems: 'center', // Centrar verticalmente
              }}
            >
              {/* Contenedor de la imagen con fondo de color */}
              <Box
                sx={{
                  backgroundColor: '#f0f0f0', // Color de fondo para la imagen
                  borderRadius: '8px',
                  padding: '8px',
                  marginRight: '16px', // Espacio entre la imagen y el contenido
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={exercise.image} // Asume que cada ejercicio tiene una propiedad `image`
                  alt={exercise.name}
                  style={{
                    width: '80px', // Tamaño de la imagen
                    height: '80px',
                    objectFit: 'cover', // Ajustar la imagen al contenedor
                    borderRadius: '8px', // Bordes redondeados
                  }}
                />
              </Box>

              {/* Contenedor de la información del ejercicio */}
              <Box sx={{ flex: 1 }}>
                {/* Nombre del ejercicio */}
                <Typography variant="h6" fontWeight="bold" color="black" mb={1}>
                  {exercise.name}
                </Typography>

                {/* Calorías y Tiempo */}
                <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                  {/* Calorías */}
                  <Stack direction="row" spacing={1} alignItems="center">
                    <LocalFireDepartmentIcon sx={{ color: 'text.secondary', fontSize: '16px' }} />
                    <Typography variant="body1" color="text.secondary">
                      {exercise.calories} kcal
                    </Typography>
                  </Stack>

                  {/* Separador */}
                  <Typography variant="body1" color="text.secondary">
                    |
                  </Typography>

                  {/* Tiempo */}
                  <Stack direction="row" spacing={1} alignItems="center">
                    <AccessTimeIcon sx={{ color: 'text.secondary', fontSize: '16px' }} />
                    <Typography variant="body1" color="text.secondary">
                      {exercise.time} min
                    </Typography>
                  </Stack>
                </Stack>

                {/* Nivel */}
                <Typography variant="body2" color="text.secondary">
                  {exercise.level}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      )}
      {/* Botón "START NOW" */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#D5D962', // Color del botón
            color: 'white', // Color del texto
            borderRadius: '12px', // Bordes redondeados
            padding: '16px', // Espaciado interno
            fontWeight: 'bold',
            fontSize: '16px', // Tamaño del texto
            textTransform: 'none', // Evitar que el texto se transforme a mayúsculas
            width: '100%', // Ancho del botón
            '&:hover': {
              backgroundColor: '#C4C450', // Cambiar color al pasar el mouse
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