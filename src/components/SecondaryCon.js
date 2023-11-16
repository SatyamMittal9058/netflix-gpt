import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryCon = () => {
  const movies=useSelector((store)=>(store.movie));
  // console.log(movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-6 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlaying}/>
        <MovieList title={"Top Rated"} movies={movies?.topRated}/>
        <MovieList title={"Popular"} movies={movies?.popularPlaying}/>
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovie}/>
      </div>
    </div>
  )
}

export default SecondaryCon;