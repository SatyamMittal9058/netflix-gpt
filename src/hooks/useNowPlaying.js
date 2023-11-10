import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useNowPlaying=()=>{
    const dispatch=useDispatch();
    const getNowPlaying=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json=await data.json();;
        dispatch(addNowPlaying(json.results));
    }

    useEffect(()=>{
        getNowPlaying();
    },[]);
}
export default useNowPlaying;