import useNowPlaying from "../hooks/useNowPlaying";
import Header from "./Header";
import MainContainer from "./MainContainer";
const Browse =()=>{
   useNowPlaying();
    return (
        <div>
            <Header/>
            <MainContainer/>
        </div>
    )
}
export default Browse;