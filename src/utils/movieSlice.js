import {createSlice} from "@reduxjs/toolkit"; 
const movieSlice=createSlice({
    name:'movie',
    initialState:{
        nowPlaying:null,
        trailerVideo:null,
        popularPlaying:null,

    },
    reducers:{
        addNowPlaying:(state,action)=>{
            state.nowPlaying=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularPlaying=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        }
    }
});
export const {addNowPlaying,addTrailerVideo,addPopularMovies}=movieSlice.actions;
export default movieSlice.reducer;