import Image from "next/image";

export default function Settings() {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "#2B2A2D" }}
    >
      {/* Contenedor Principal */}
      <div
        className="w-[389px] h-[842px] rounded-[37.924px] bg-[#364033] flex flex-col justify-center items-start px-[32px] space-y-6"
      >
        {/* Profile Section */}
        <section className="text-center w-full">
          <div
            className="relative w-[169.661px] h-[169.661px] rounded-full border-[5px] mx-auto"
            style={{
              borderColor: "#FFC9E9",
              backgroundImage: "url('/profile-picture.png')",
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
                fill="#5F5F5F"
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
        <section className="w-full">
          <h3
            className="text-[10.978px] font-bold leading-[35.526px] text-white mb-2"
            style={{ fontFamily: "Droid Sans" }}
          >
            App Settings
          </h3>

          <div
            className="w-full max-w-[330px] rounded-[27px] border border-[#2B2A2D] bg-[#2B2A2D] flex flex-col"
          >
            {/* Account Informations */}
            <div className="flex justify-between items-center px-6 py-4">
              <span className="text-white text-[14px]">Account Informations</span>
              <Image
                src="/arrow.svg"
                alt="Arrow Icon"
                width={17}
                height={17}
                className="ml-auto"
              />
            </div>
            <div
              className="w-[295.489px] h-[0.998px] mx-auto"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.12)" }}
            ></div>

            {/* Notifications */}
            <div className="flex justify-between items-center px-6 py-4">
              <span className="text-white text-[14px]">Notifications</span>
              <Image
                src="/arrow.svg"
                alt="Arrow Icon"
                width={17}
                height={17}
                className="ml-auto"
              />
            </div>
            <div
              className="w-[295.489px] h-[0.998px] mx-auto"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.12)" }}
            ></div>

            {/* Text Size */}
            <div className="flex justify-between items-center px-6 py-4">
              <span className="text-white text-[14px]">Text Size</span>
              <span className="flex items-center text-gray-400 text-[14px]">
                Medium
                <Image
                  src="/arrow.svg"
                  alt="Arrow Icon"
                  width={17}
                  height={17}
                  className="ml-1"
                />
              </span>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="w-full">
          <h3
            className="text-[10.978px] font-bold leading-[35.526px] text-white mb-2"
            style={{ fontFamily: "Droid Sans" }}
          >
            Support
          </h3>

          <div
            className="w-full max-w-[330px] rounded-[27.445px] border border-[#2B2A2D] bg-[#2B2A2D] flex flex-col justify-between px-6 py-4"
          >
            <div className="flex items-center justify-between border-b border-gray-600 pb-2">
              <span className="text-white text-[14px]">Terms Of Service</span>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-white text-[14px]">Privacy Policy</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
