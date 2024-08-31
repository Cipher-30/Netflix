import React from 'react'
import Register from './Register'


import { useSelector } from 'react-redux';
import { languages } from '../utils/languageConstant';

const LandingPage = () => {


  const languageSelected = useSelector( (store) => (store.language.language))


  return (
    <div>

<div className=' w-full h-[700px]   lg:w-1/2 mx-auto flex flex-col justify-center text-white text-center   leading-8'> 
            <h1 className='text-3xl md:text-6xl font-bold'>{languages[languageSelected].lHeading1}</h1>
            <h1 className='text-3xl  md:text-6xl font-bold'>{languages[languageSelected].lHeading2}</h1>
            <h3 className='font-semibold'>{languages[languageSelected].lHeading3}</h3>
            <Register/>
           </div>



    </div>
  )
}

export default LandingPage