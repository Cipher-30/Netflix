import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMoiveTrailer } from "../utils/movieSlice";

const useMovieTrailer = ({ movieId }) => {
    const dispatch = useDispatch();

    const fetchNowPlayingMovies = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
        const dataJson = await data.json();

        if (dataJson) {
            const results = dataJson.results;
            // console.log(results);

            const filterTrailerData = results.filter((obj) => {
                return (obj?.type === "Trailer")
            })

            dispatch(addMoiveTrailer(filterTrailerData));

        }


    }


    useEffect(() => {
        fetchNowPlayingMovies();
    }, []);

}


export default useMovieTrailer;