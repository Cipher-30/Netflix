import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {

    //HOOK TO FETCH THE TRAILER  AND STORE IT REDUX 
   useMovieTrailer({movieId});
   let id;  

    //SUBSCRIBING TO REDUX MOVIE-TRAILER STORE FOR ID
   const trailer = useSelector( (store) => (store.movies.movieTrailer));
     if(trailer)
     {
        id = trailer[0]?.key;
     }



  return (
    <div className= ' '>
        
        <iframe
        className="w-full  mt-8 sm:mt-0 aspect-video text-black"
        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&cc_load_policy=0&modestbranding=1&iv_load_policy=3&fs=0&rel=0&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"

      ></iframe>

    </div>
  )
}

export default VideoBackground