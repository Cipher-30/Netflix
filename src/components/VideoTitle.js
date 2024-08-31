import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (

    <div className="hidden sm:block absolute  sm:aspect-video top-1/2   px-4 sm:px-8 pt-[25%] sm:pt-[20%] transform -translate-y-1/2 text-white z-10 bg-gradient-to-r from-black">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">{title}</h1>
      <h2 className="w-[90%] sm:w-[70%] md:w-[50%] mt-4 text-white text-sm sm:text-lg md:text-xl">{overview}</h2>
      <div className="flex flex-wrap mt-4 gap-2">
        <button className="font-semibold px-6 sm:px-8 md:px-12 py-2 sm:py-3 md:py-4 text-lg sm:text-xl md:text-2xl border cursor-pointer hover:bg-white bg-slate-100 bg-opacity-20 rounded-sm">
          Play
        </button>
        <button className="font-semibold px-6 sm:px-8 md:px-12 py-2 sm:py-3 md:py-4 text-lg sm:text-xl md:text-2xl border cursor-pointer bg-slate-100 bg-opacity-20 rounded-sm">
          Info
        </button>
      </div>
    </div>






  )
}

export default VideoTitle 