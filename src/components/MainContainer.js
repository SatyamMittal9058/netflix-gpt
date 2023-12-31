import { useSelector } from "react-redux";
import VideoBack from "./VideoBack";
import VideoTitle from "./VideoTitle";

const MainContainer=()=>{
    const movies=useSelector((store)=>(store.movie?.nowPlaying));
    if(!movies) return;
    const mainMovie=movies[0];
    const{original_title,overview,id}=mainMovie;
    // console.log(mainMovie);
    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBack movieId={id}/>
        </div>
    )
}
export default MainContainer;