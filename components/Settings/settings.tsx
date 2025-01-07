"use client";

import Image from "next/image";

export default function Settings() {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "#2B2A2D" }} // Fondo fuera del layout
    >
      {/* Contenedor Principal */}
      <div
        className="w-[389px] h-[842px] rounded-[37.924px] bg-[#364033] flex flex-col items-center justify-between"
      >
        {/* Header */}
        <header className="w-full flex justify-between items-center py-2 px-6">
          <span className="text-sm text-white">9:41</span>
          <div className="flex items-center space-x-2">
            <span className="text-white">📶</span>
            <span className="text-white">🔋</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center w-full px-6">
          {/* Profile Section */}
          <section className="text-center mt-[-20px]"> {/* Ajuste de posición */}
            <div
              className="relative w-[169.661px] h-[169.661px] rounded-full border-[5px]"
              style={{
                borderColor: "#FFC9E9", // Color del borde
                backgroundImage: "url('/profile-picture.png')", // Cambia por la ruta real de la imagen
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Botón de Edición */}
              <button
                className="absolute bottom-2 right-2 w-[30.94px] h-[30.94px] bg-[#F5F2B8] rounded-full flex items-center justify-center"
                aria-label="Edit Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#5F5F5F" // Cambia esto si necesitas otro color de ícono
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.854a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708l-9.5 9.5a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l9.5-9.5zm-.646.646L2 11.146V13h1.854l9.5-9.5L11.5 2 8 5.5 7.5 5 11 1.5l-.5-.5z" />
                </svg>
              </button>
            </div>
            <h2 className="mt-4 text-xl font-bold text-white">Youssef Labidi</h2>
            <p className="text-sm text-gray-400">172 CM</p>
            <p className="text-lg font-bold text-white">62 KG</p>
          </section>

          {/* App Settings */}
          <section className="w-full flex flex-col items-center mt-6">
            <h3
              className="text-[12px] font-bold leading-[18px] text-white mb-2"
              style={{ fontFamily: "Droid Sans" }}
            >
              App Settings
            </h3>

            <div
              className="w-[90%] max-w-[330px] h-auto rounded-[27px] border border-[#2B2A2D] bg-[#2B2A2D] flex flex-col py-4"
            >
              <div className="flex justify-between items-center px-6 py-2">
                <span className="text-white text-[14px]">Account Informations</span>
                <button className="text-gray-400 text-[14px]">→</button>
              </div>
              <div className="flex justify-between items-center px-6 py-2">
                <span className="text-white text-[14px]">Notifications</span>
                <button className="text-gray-400 text-[14px]">→</button>
              </div>
              <div className="flex justify-between items-center px-6 py-2">
                <span className="text-white text-[14px]">Text Size</span>
                <span className="text-gray-400 text-[14px]">Medium →</span>
              </div>
            </div>
          </section>
        </main>

       {/* Support Section */}
<section className="w-full flex justify-center mt-4">
  <div
    className="w-[330px] h-[122px] rounded-[27.445px] border border-[#2B2A2D] bg-[#2B2A2D] flex flex-col justify-center px-6"
  >
    {/* Terms Of Service */}
    <div className="flex items-center justify-between border-b border-gray-600 pb-3">
      <span className="text-white text-[14px]">Terms Of Service</span>
    </div>

    {/* Privacy Policy */}
    <div className="flex items-center justify-between pt-3">
      <span className="text-white text-[14px]">Privacy Policy</span>
    </div>
  </div>
</section>




      </div>
    </div>
  );
}
