"use client"; // Habilitar rendering del lado del cliente en Next.js

import Settings from "@/components/Settings/settings"; // Asegúrate de que la ruta al componente sea correcta

export default function Page() {
  return (
    <div>
      {/* Aquí mostramos directamente el diseño */}
      <Settings />
    </div>
  );
}
