import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:
    {
        language: "en",
        movies: null,
    },
    reducers:
    {
        addLanguage: (state, action) =>
        {
            state.language = action.payload;
        },
        addMovies: (state, action) =>
        {
            state.language = action.payload;
        },
        
        
    }
});



export const{addLanguage, addMovies } = configSlice.actions;
export default configSlice.reducer ;



// import { createSlice } from "@reduxjs/toolkit";

// const configSlice = createSlice({
//     name: "config",
//     initialState: {
//         language: "en"
//     },
//     reducers: {
//         addLanguage: (state, action) => {
//             state.language = action.payload;
//         }
//     }
// });

// export const { addLanguage } = configSlice.actions;
// export default configSlice.reducer;
