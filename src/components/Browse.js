import useNowPlaying from "../hooks/useNowPlaying";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryCon from "./SecondaryCon";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse =()=>{
    const showGpt=useSelector(store=>store.gpt.showGptSearch);
   useNowPlaying();
   usePopularMovies();
   useTopRated();
   useUpcoming();
    return (
        <div>
            <Header/>
            {showGpt?(<GptSearch/>):(
                <>
                    <MainContainer/>
                    <SecondaryCon/>
                </>
            )}
        </div>
    )
}
export default Browse;