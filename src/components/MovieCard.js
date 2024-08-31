import React from 'react';
import { imageUrl } from '../utils/constants';

const MovieCard = ({ movies, title }) => {

    if (movies === null) {
      return <h1>Waiting!!!</h1>; 
    }
  
    return (
      <div className="movie-card-container text-white  ">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">{title}</h1>
      <div
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        className="flex overflow-x-scroll sm:space-x-4 pb-4 no-scrollbar"
      >
        {movies.map((obj, index) => (
          <div
            key={index}
            className="overflow-hidden group cursor-pointer flex-shrink-0 bg-black rounded w-40 sm:w-56 md:w-64"
          >
            <img
              src={imageUrl + obj?.poster_path}
              alt={'Movie Poster'}
              className=" w-[70%] sm:w-full h-auto rounded group-hover:scale-105 transition-transform duration-150"
            />
            <h1 className="text-sm sm:text-lg my-2 sm:my-4 text-white px-2">
              {obj?.title || 'Untitled'}
            </h1>
          </div>
        ))}
      </div>
    </div>
    
    );
  };
  

export default MovieCard;
