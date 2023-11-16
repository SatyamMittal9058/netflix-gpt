import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieName:null,
        movieResults:null,
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResults:(state,action)=>{
            const {movieName,movieResults}=action.payload;
            state.movieName=movieName;
            state.movieResults=movieResults
        }

    }
})
export const {toggleGptSearch,addGptMovieResults}=gptSlice.actions;
export default gptSlice.reducer;