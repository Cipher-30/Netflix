import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTopRated from "../hooks/useTopRated"
import { Outlet } from 'react-router-dom'


const Browse = () => {

  //HOOK TO FETCH TOP MOVIES AND STORE IT IN REDUX
  useNowPlayingMovies();
  useTopRated();



  return (
    <div  className='relative   '>
      <nav className='absolute -top-9 sm:top-0 left-0 right-0 z-50 bg-black'>
        <div className='  sm:pt-6   sm:px-2   bg-gradient-to-b from-black'><Header/></div>
        </nav>
      
      {/* <MainContainer/>
      <SecondaryContainer/> */}
      <Outlet/>
   
    </div>
  )
}

export default Browse