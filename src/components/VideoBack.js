import { useEffect } from "react";
import { API_VIDEO, UTUBE_URL } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";



const VideoBack=(props)=>{
    const {movieId}=props;
    
    const trailerVid=useSelector((store)=>store.movie?.trailerVideo);
    useMovieTrailer(movieId);
    
    return (
        <div>
            <iframe className="w-screen aspect-video" src={UTUBE_URL+trailerVid?.key+"?&autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}
export default VideoBack;