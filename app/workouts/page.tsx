'use client'; // Indicates this is a Client Component

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Using the new useRouter
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import WorkoutCard from '../../components/Cards/WorkoutCard'; // Importing the WorkoutCard component

// Mock data to simulate data provision
const mockWorkoutData = {
  calories: 135,
  minutes: 5,
  level: 'Beginner',
  category: 'Cardio',
  weight: 'Lose',
  title: 'EXERCISES WITH SITTING DUMBBELLS',
  description:
    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
  exercises: [
    {
      name: 'Exercises with Jumping Rope',
      calories: 110,
      time: 10,
      level: 'Beginner',
      image: '/Exercises/exercise1.png', // Ruta de la imagen
    },
    {
      name: 'Exercises with Holding Jumping Rope',
      calories: 135,
      time: 8,
      level: 'Beginner',
      image: '/Exercises/exercise3.png', // Ruta de la imagen
    },
    {
      name: 'Exercises with Sitting Dumbbells',
      calories: 135,
      time: 5,
      level: 'Beginner',
      image: '/Exercises/exercise1.png', // Ruta de la imagen
    },
  ],
};

export default function WorkoutDetails() {
  const router = useRouter();

  // Function to handle the click on the arrow icon
  const handleGoBack = () => {
    router.push('/categories'); // Navigate to the categories page
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', position: 'relative' }}>
      <div style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {/* Contenedor de la imagen de fondo */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '50vh',
          zIndex: 0
        }}>
          <Image
            src="/Cover/WorkoutDetailsCoverImg.png"
            alt="Workout Cover"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Botón de retroceso */}
        <IconButton
          onClick={handleGoBack}
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            color: 'black',
            zIndex: 1,
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* Contenedor del WorkoutCard */}
        <div style={{
          top: '35vh',
          position: 'relative',
          width: '90%',
          maxWidth: '400px',
          zIndex: 2
        }}>
          <WorkoutCard
            calories={mockWorkoutData.calories}
            minutes={mockWorkoutData.minutes}
            level={mockWorkoutData.level}
            category={mockWorkoutData.category}
            weight={mockWorkoutData.weight}
            title={mockWorkoutData.title}
            description={mockWorkoutData.description}
            exercises={mockWorkoutData.exercises}
          />
        </div>
      </div>
    </div>
  );
}