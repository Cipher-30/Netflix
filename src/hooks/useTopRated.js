import { useDispatch } from "react-redux";
import {  options, topRatedApi } from "../utils/constants";
import {  AddTopRated } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRated = () =>
{

    const dispatch = useDispatch();


    const fetchTopRated = async () =>
        {
          const data = await fetch(topRatedApi, options);
          const dataJson = await data.json();
          console.log((dataJson));
      
          dispatch(AddTopRated(dataJson.results));
          
        }
      
      
        useEffect( () =>
        {
          fetchTopRated();
        }, []);



}


export default useTopRated;