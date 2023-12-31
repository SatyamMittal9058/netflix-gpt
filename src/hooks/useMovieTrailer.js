import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_VIDEO } from "../utils/constant";

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
    const nowtrailer=useSelector((store)=>store.movie.trailerVideo);
    const getMovieTrailer=async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_VIDEO);
        const json=await data.json();
        const filterData=json.results.filter(video=>video.type==="Trailer");
        const trailer=filterData.length?filterData[0]:json.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
        !nowtrailer && getMovieTrailer();
    },[])
}
export default useMovieTrailer;