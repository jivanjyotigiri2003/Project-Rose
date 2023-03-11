import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"
import data from "./data"

export default function SocietyCarousel({
  children: data,
  autoSlide = true,
  autoSlideInterval = 4000,
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? data.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === data.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {data}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-1">
        <button
          onClick={prev}
          className=" rounded-full shadow bg-white opacity-60 hover:opacity-90 "
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={next}
          className=" rounded-full shadow  bg-white opacity-60 hover:opacity-90"
        >
        <ChevronRight size={30} />
        </button>
      </div>

      {/* <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {data.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div> */}
    </div>
  )
}