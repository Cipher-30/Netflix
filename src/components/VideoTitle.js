import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    
    <div  className="absolute aspect-video top-1/2 pl-8 pt-[20%] transform -translate-y-1/2 text-white z-10 bg-gradient-to-r from-black " >
        <h1 className=' text-6xl font-bold'>{title}</h1>
        <h2 className=' w-[40%] mt-4 text-white text-xl  '>{overview}</h2>
        <button className='font-semibold mt-4 mr-4 px-12 py-4 text-2xl border cursor-pointer hover:bg-white  bg-slate-100 bg-opacity-20 rounded-sm '>Play</button>
        <button className='font-semibold px-12 py-4 text-2xl border cursor-pointer  bg-slate-100 bg-opacity-20 rounded-sm'>Info</button>
      
    </div>









    // <div  className="absolute  min-h-[calc(100vh-20vh)] top-1/2 pl-8 pt-[10%] transform -translate-y-1/2 text-white z-50 border border-red-600" >
    //     <h1 className='text-6xl font-bold'>{title}</h1>
    //     <h2 className=' w-[40%] mt-4 text-white text-xl  '>{overview}</h2>
    //     <button className='font-semibold mt-4 mr-4 px-12 py-4 text-2xl border cursor-pointer hover:bg-white  bg-slate-100 bg-opacity-20 rounded-sm '>Play</button>
    //     <button className='font-semibold px-12 py-4 text-2xl border cursor-pointer  bg-slate-100 bg-opacity-20 rounded-sm'>Info</button>
      
    // </div>








  )
}

export default VideoTitle