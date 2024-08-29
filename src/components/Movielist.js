import React from 'react'
import MovieCard from './MovieCard'

const Movielist = ({movies, rated}) => {


  return (
    <div>
        <div className='relative -mt-[12rem]  z-50'> 
          <MovieCard title={"Now Playing"} movies={movies} />
           <MovieCard title={"Top Rated"} movies={rated} />
        
        </div>
    </div>
  )
}

export default Movielist