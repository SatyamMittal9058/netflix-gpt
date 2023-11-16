import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const usePopularMovies=()=>{
    const dispatch=useDispatch();
    const nowPopularmovies=useSelector((store)=>store.movie.popularPlaying);
    const getPopularMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json=await data.json();;
        dispatch(addPopularMovies(json.results));
    }

    useEffect(()=>{
        if(!nowPopularmovies) getPopularMovies();
    },[]);
}
export default usePopularMovies;