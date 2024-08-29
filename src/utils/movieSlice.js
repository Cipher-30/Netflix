import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice(
    {
        name: "nowPlayingMovies",
        initialState: {
             nowPlayingMovies : null,
             movieTrailer : null,
             topRated : null,
        },
        reducers :
        {
            addNowPlaying : (state, action) =>
            {
               state.nowPlayingMovies = action.payload;
            },
            AddTopRated : (state, action) =>
            {
               state.topRated = action.payload;
            },
            addMoiveTrailer : (state, action) =>
            {
                state.movieTrailer = action.payload;
            }

        }
    }
)
 

export const{addNowPlaying, addMoiveTrailer, AddTopRated} = movieSlice.actions;

export default movieSlice.reducer;