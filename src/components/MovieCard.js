import { IMG_URL } from "../utils/constant";

const MovieCard=(props)=>{
    const {posterPath}=props;
    if(!posterPath) return null;
    return(
        <div className="w-32 pr-4">
            <img alt="movie-card" src={IMG_URL+posterPath}/>

        </div>
    )
}
export default MovieCard;