import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector( (store) => (store.movies.nowPlayingMovies));

    //EARLY RETURN
    if(movies === null)
       return;

     const mainMovie = movies[0];


  return (
    <div className='relative '>
        
        <VideoTitle title={mainMovie?.original_title} overview={mainMovie?.overview}/>
        <VideoBackground movieId={mainMovie?.id}/>

    </div>
  )
}

export default MainContainer