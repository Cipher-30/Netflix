import React from 'react';
import { imageUrl } from '../utils/constants';

const MovieCard = ({ movies, title }) => {

    if (movies === null) {
      return <h1>Waiting!!!</h1>; 
    }
  
    return (
      <div className="movie-card-container text-white ">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="flex overflow-x-scroll   ">
          {movies.map((obj, index) => (
            <div key={index} className=" overflow-hidden group cursor-pointer flex-shrink-0 bg-black  mx-4 rounded w-64">
              <img
                src={imageUrl + obj?.poster_path}
                alt={'Movie Poster'}
                className="w-full h-auto rounded group-hover:scale-105 transition-all duration-100"
              />
              <h1 className="text-lg my-4 text-white">{obj?.title || 'Untitled'}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default MovieCard;
