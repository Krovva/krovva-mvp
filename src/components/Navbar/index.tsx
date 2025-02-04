"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname(); // Get current route
  const [selected, setSelected] = useState("");

  useEffect(() => {
    // Update selected status based on current route
    const route = pathname.replace("/", "") || "home"; // If you are in /, select home.
    setSelected(route);
  }, [pathname]);

  const icons = [
    { name: "home", src: "/icons/home.svg" },
    { name: "home/categories", src: "/icons/categories.svg" },
    { name: "home/workouts", src: "/icons/workouts.svg" },
    { name: "home/settings", src: "/icons/settings.svg" },
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
        <Link
          href={`/${icon.name}`}
          passHref
          key={icon.name}
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: selected === icon.name ? "#D6D984" : "transparent",
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
                  ? "brightness(0) saturate(100%) invert(0%) sepia(94%) saturate(0%) hue-rotate(0deg) brightness(0.3) contrast(1)"
                  : "brightness(0) saturate(100%) invert(93%) sepia(11%) saturate(0%) hue-rotate(0deg) brightness(0.8) contrast(0.8)",
            }}
          />
        </Link>
      ))}
    </Box>
  );
}
