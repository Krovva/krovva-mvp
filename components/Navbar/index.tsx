"use client";

import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname(); // Obtener la ruta actual
  const [selected, setSelected] = useState("");

  useEffect(() => {
    // Actualizar el estado `selected` basado en la ruta actual
    const route = pathname.replace("/", "") || "home"; // Si está en "/", selecciona 'home'
    setSelected(route);
  }, [pathname]);

  const handleNavigation = (route: string) => {
    router.push(`/${route}`);
  };

  const icons = [
    { name: "home", src: "/icons/home.svg" },
    { name: "exercises", src: "/icons/exercises.svg" },
    { name: "workouts", src: "/icons/workouts.svg" },
    { name: "settings", src: "/icons/settings.svg" },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "16px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "355.289px",
        height: "89.82px",
        backgroundColor: "#2B2A2D",
        borderRadius: "44.91px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      {icons.map((icon) => (
        <IconButton
          key={icon.name}
          onClick={() => handleNavigation(icon.name)}
          sx={{
            width: "81.836px",
            height: "81.836px",
            backgroundColor: selected === icon.name ? "#D6D984" : "transparent", // Fondo verde si está seleccionado
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={icon.src}
            alt={`${icon.name} icon`}
            width={40}
            height={40}
            style={{
              filter:
                selected === icon.name
                  ? "brightness(0) saturate(100%) invert(0%) sepia(94%) saturate(0%) hue-rotate(0deg) brightness(0.3) contrast(1)" // Icono negro cuando está seleccionado
                  : "brightness(0) saturate(100%) invert(93%) sepia(11%) saturate(0%) hue-rotate(0deg) brightness(0.8) contrast(0.8)", // Icono blanco cuando no está seleccionado
            }}
          />
        </IconButton>
      ))}
    </Box>
  );
}
