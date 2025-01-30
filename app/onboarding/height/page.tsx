"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export default function HeightSelectionPage() {
  const [unit, setUnit] = useState<"inches" | "cm">("cm")
  const [height, setHeight] = useState(170)
  const scaleContainerRef = useRef<HTMLDivElement | null>(null)
  const router = useRouter()

  const minHeight = 140
  const maxHeight = 200
  const markWidth = 14 // Spacing between marks in pixels

  const handleUnitChange = (newUnit: "inches" | "cm") => {
    setUnit(newUnit)
  }

  const renderScale = () => {
    const scaleMarks = []
    for (let i = minHeight; i <= maxHeight; i += 1) {
      const isMajor = i % 10 === 0
      scaleMarks.push(
        <div key={i} className="inline-block text-center" style={{ width: `${markWidth}px` }}>
          <div className={`mx-auto bg-white ${isMajor ? "h-[50px] w-[3px]" : "h-[15px] w-[1.5px]"}`} />
          {isMajor && <span className="block text-white text-[10px] mt-1">{i}</span>}
        </div>,
      )
    }
    return (
      <div
        ref={scaleContainerRef}
        className="flex justify-start items-start overflow-x-scroll overflow-y-hidden whitespace-nowrap mt-3 w-full h-[80px] pb-2 relative scrollbar-hide"
        onScroll={(e) => {
          const scrollLeft = e.currentTarget.scrollLeft
          const containerWidth = e.currentTarget.offsetWidth
          const newHeight = Math.round(scrollLeft / markWidth) + minHeight
          if (newHeight >= minHeight && newHeight <= maxHeight && newHeight !== height) {
            setHeight(newHeight)
          }
        }}
      >
        <div className="absolute left-1/2 h-[50px] w-[3px] bg-[#D5D962] transform -translate-x-1/2 z-10" />
        <div className="inline-flex items-start" style={{ paddingLeft: "50%", paddingRight: "50%" }}>
          {scaleMarks}
        </div>
      </div>
    )
  }

  useEffect(() => {
    if (scaleContainerRef.current) {
      const containerWidth = scaleContainerRef.current.offsetWidth
      const scrollPosition = (height - minHeight) * markWidth
      scaleContainerRef.current.scrollLeft = scrollPosition
    }
  }, [height])

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-3 relative">
      {/* Progress Bar */}
      <div className="w-4/5 absolute top-5 left-1/2 transform -translate-x-1/2 h-2.5 rounded-full overflow-hidden">
        <div className="h-full bg-[#333333]">
          <div className="h-full w-3/5 bg-[#D5D962]" />
        </div>
      </div>

      <h1 className="font-bold mb-5 text-center mt-2 text-xl">What is your height?</h1>

      {/* Unit Selection */}
      <div className="flex border-2 border-black rounded-full overflow-hidden w-[200px] h-[40px] mb-4">
        <button
          onClick={() => handleUnitChange("inches")}
          className={`flex-1 ${unit === "inches" ? "bg-black text-white" : "bg-white text-black"}`}
        >
          inches
        </button>
        <button
          onClick={() => handleUnitChange("cm")}
          className={`flex-1 ${unit === "cm" ? "bg-black text-white" : "bg-white text-black"}`}
        >
          cm
        </button>
      </div>

      {/* Height Display */}
      <div className="bg-black text-[#D5D962] rounded-[20px] p-4 w-full max-w-[400px] text-center flex flex-col items-center justify-center relative">
        <span className="font-bold text-[72px] mb-2">{height}</span>
        <span className="text-[24px] mb-3">{unit}</span>
        {renderScale()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center gap-2 w-[90%] absolute bottom-5">
        <button
          className="border-2 border-black rounded-xl w-[50px] h-[50px] flex items-center justify-center"
          onClick={() => router.back()}
        >
          ←
        </button>
        <button
          className="bg-[#D5D962] text-black rounded-xl py-1 px-8 text-base font-bold"
          onClick={() => router.push("/next-page")}
        >
          Next →
        </button>
      </div>
    </div>
  )
}

