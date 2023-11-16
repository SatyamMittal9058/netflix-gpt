import { BG_IMG_URL } from "../utils/constant";
import GptSuggest from "./GptSuggest";
import Gptbar from "./Gptbar";


const GptSearch=()=>{
    return (
        <div>
            <div className="absolute -z-10">
                <img src={BG_IMG_URL} alt="logo" />
            </div>
            <Gptbar/>
            <GptSuggest/>
        </div>
    )
}
export default GptSearch;