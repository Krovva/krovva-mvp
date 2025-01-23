'use client'; // Indica que este es un Client Component

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Usamos el nuevo useRouter
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function WorkoutsPage() {
  const router = useRouter();

  // Función para manejar el clic en el ícono de flecha
  const handleGoBack = () => {
    router.push('/categories'); // Redirige a la página de categorías
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
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

      {/* Espacio para el contenido restante */}
      <div style={{ padding: '16px' }}>
        {/* Aquí irá el resto del contenido (nombre, categoría, ejercicios, etc.) */}
      </div>
    </div>
  );
}