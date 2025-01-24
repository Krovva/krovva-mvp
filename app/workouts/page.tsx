'use client'; // Indica que este es un Client Component

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Usamos el nuevo useRouter
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import WorkoutCard from '../../components/Cards/WorkoutCard'; // Importamos el componente WorkoutCard
import { Typography } from '@mui/material'; // Importamos Typography de MUI

// Mock de datos para simular la provisión de datos
const mockWorkoutData = {
  calories: 135, // Calorías del entrenamiento
  minutes: 5, // Duración en minutos
  level: 'Beginner', // Nivel del entrenamiento
  category: 'Cardio', // Categoría del entrenamiento
  weight: 'Lose', // Objetivo de peso
  title: 'EXERCISES WITH SITTING DUMBBELLS', // Título del entrenamiento
  description:
    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.', // Descripción del entrenamiento
};

export default function WorkoutDetails() {
  const router = useRouter();

  // Función para manejar el clic en el ícono de flecha
  const handleGoBack = () => {
    router.push('/categories'); // Redirige a la página de categorías
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', position: 'relative' }}>
      {/* Contenedor de la imagen de portada */}
      <div style={{ position: 'relative', width: '100%', height: '50vh' }}>
        <Image
          src="/Cover/WorkoutDetailsCoverImg.png"
          alt="Workout Cover"
          layout="fill"
          objectFit="cover"
          priority
        />

        {/* Ícono de flecha para regresar */}
        <IconButton
          onClick={handleGoBack}
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            color: 'black',
            zIndex: 1, // Asegura que el ícono esté por encima de la imagen
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
      </div>

      {/* Contenedor del WorkoutCard (superpuesto a la imagen) */}
      <div
        style={{
          position: 'absolute',
          top: '40%', // Coloca el card en la mitad inferior de la imagen
          left: '50%',
          transform: 'translateX(-50%)', // Centra el card horizontalmente
          width: '90%', // Ancho del card
          maxWidth: '400px', // Ancho máximo del card
          zIndex: 1, // Asegura que el card esté por encima de la imagen
        }}
      >
        <WorkoutCard
          calories={mockWorkoutData.calories} // Calorías desde el mock
          minutes={mockWorkoutData.minutes} // Tiempo desde el mock
          level={mockWorkoutData.level} // Nivel desde el mock
          category={mockWorkoutData.category} // Categoría desde el mock
          weight={mockWorkoutData.weight} // Objetivo de peso desde el mock
        />
      </div>

      {/* Contenedor del texto (bajado para evitar solapamiento) */}
      <div
        style={{
          position: 'relative',
          top: '100px', // Bajamos el texto para evitar que lo tape el card
          padding: '16px',
          textAlign: 'left', // Alinea el texto a la izquierda
          maxWidth: '400px', // Ancho máximo del texto
          margin: '0 auto', // Centra el contenedor del texto
          marginLeft: '16px', // Margen izquierdo para alinear con el card
        }}
      >
        {/* Título */}
        <Typography variant="h5" fontWeight="bold" color="black" mb={2}>
          {mockWorkoutData.title}
        </Typography>

        {/* Descripción */}
        <Typography variant="body2" color="text.secondary">
          {mockWorkoutData.description}
        </Typography>
      </div>
    </div>
  );
}