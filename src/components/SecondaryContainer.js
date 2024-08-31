import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

   const movies = useSelector((store) => (store.movies.nowPlayingMovies))
   const rated = useSelector((store) => (store.movies.topRated))
  //  console.log("moviesssss", movies);
   
  return (
    <div className='bg-black px-8 py-8'>
      <Movielist  movies={movies} rated={rated} />
    </div>
  )
}

export default SecondaryContainer