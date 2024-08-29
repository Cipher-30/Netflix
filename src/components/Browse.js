import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTopRated from "../hooks/useTopRated"


const Browse = () => {

  //HOOK TO FETCH TOP MOVIES AND STORE IT IN REDUX
  useNowPlayingMovies();
  useTopRated();



  return (
    <div  className='relative   '>
      <nav className='absolute top-0 left-0 right-0 z-50'>
        <div className='  pt-4   px-8   bg-gradient-to-b from-black'><Header/></div>
        </nav>
      
      <MainContainer/>
      <SecondaryContainer/>
   
    </div>
  )
}

export default Browse