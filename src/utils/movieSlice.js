import {createSlice} from "@reduxjs/toolkit"; 
const movieSlice=createSlice({
    name:'movie',
    initialState:{
        nowPlaying:null,
        trailerVideo:null,
        popularPlaying:null,
        topRated:null,
        upcomingMovie:null,

    },
    reducers:{
        addNowPlaying:(state,action)=>{
            state.nowPlaying=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularPlaying=action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload;
        },
        addUpcoming:(state,action)=>{
            state.upcomingMovie=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        }
        
    }
});
export const {addNowPlaying,addTrailerVideo,addPopularMovies,addTopRated,addUpcoming}=movieSlice.actions;
export default movieSlice.reducer;