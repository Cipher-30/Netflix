import { useDispatch } from "react-redux";
import { nowPlayingMoviesApi, options } from "../utils/constants";
import { addNowPlaying } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () =>
{

    const dispatch = useDispatch();


    const fetchNowPlayingMovies = async () =>
        {
          const data = await fetch(nowPlayingMoviesApi, options);
          const dataJson = await data.json();
          console.log((dataJson));
      
          dispatch(addNowPlaying(dataJson.results));
          
        }
      
      
        useEffect( () =>
        {
          fetchNowPlayingMovies();
        }, []);



}


export default useNowPlayingMovies;