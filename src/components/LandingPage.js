import React from 'react'
import Register from './Register'

const LandingPage = () => {
  return (
    <div>

<div className=' w-full h-[700px]   lg:w-1/2 mx-auto flex flex-col justify-center text-white text-center   leading-8'> 
            <h1 className='text-3xl md:text-6xl font-bold'>Unlimited movies, TV</h1>
            <h1 className='text-3xl  md:text-6xl font-bold'>shows and more</h1>
            <h3 className='font-semibold'>Starts at ₹149. Cancel anytime.</h3>
            <Register/>
           </div>



    </div>
  )
}

export default LandingPage