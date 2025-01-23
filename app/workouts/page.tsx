import React from 'react';
import Image from 'next/image';

export default function WorkoutsPage() {
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
      </div>

      {/* Espacio para el contenido restante */}
      <div style={{ padding: '16px' }}>
        {/* Aquí irá el resto del contenido (nombre, categoría, ejercicios, etc.) */}
      </div>
    </div>
  );
}