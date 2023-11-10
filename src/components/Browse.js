import useNowPlaying from "../hooks/useNowPlaying";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryCon from "./SecondaryCon";
const Browse =()=>{
   useNowPlaying();
   usePopularMovies();
    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryCon/>
        </div>
    )
}
export default Browse;