import badge from "@/public/badge.png";
import Image from "next/image";

export type workout = {
  progress: number;
  //   duration: number;
  completed: number;
  //   calories: number;
  //   weight: number;
  //   tutAccuracy: number;
};

function Workout({ progress, completed }: workout) {
  return (
    <div className="w-[330px] h-fit bg-[#FFFFFF] shadow-md rounded-md py-4 px-8 text-center grid gap-1">
      <Image src={badge} alt="badge" className="mx-auto" />
      <h1 className="text-[#000000] font-semibold text-xl">Workout Complete</h1>
      <h2 className="text-center text-[#0A0A0A] text-base font-normal">
        Streak: 10 days
      </h2>
      <div className="grid gap-1">
        <div className="font-medium text-sm flex justify-between">
          <span>Overall progress:</span>
          <span>{progress}%</span>
        </div>
        <div className="h-3 w-full bg-[#434343] rounded-full">
          <span
            className={`h-full bg-[#B0C929] w-[${progress}%] rounded-full block`}
          />
        </div>
      </div>
      <div className="grid gap-y-2 py-5">
        <div className="w-full flex justify-between items-center text-[#A1A1AA] font-normal text-sm">
          <span className="text-[#9A7A7A]">Exercise Completed:</span>
          <span className="text-[#040404]">{completed}</span>
        </div>
        <div className="w-full flex justify-between items-center text-[#A1A1AA] font-normal text-sm">
          <span>Duration:</span>
          <span className="text-[#040404]"></span>
        </div>
        <div className="w-full flex justify-between items-center text-[#A1A1AA] font-normal text-sm">
          <span>Calories burned:</span>
          <span className="text-[#040404]"></span>
        </div>
        <div className="w-full flex justify-between items-center text-[#A1A1AA] font-normal text-sm">
          <span>Weight lifted:</span>
          <span className="text-[#040404]"></span>
        </div>
        <div className="w-full flex justify-between items-center text-[#A1A1AA] font-normal text-sm">
          <span>TUT accuracy</span>
          <span className="text-[#040404]"></span>
        </div>
      </div>
      <button className="bg-[#D6D984] w-full py-2 rounded-md font-extrabold capitalize text-[#000000] text-center">
        see full summary{" "}
      </button>
    </div>
  );
}
export default Workout;
