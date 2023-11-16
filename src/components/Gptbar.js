import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/lang';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constant';
import { addGptMovieResults } from '../utils/gptSlice';

const Gptbar = () => {
  const dispatch=useDispatch();
  const language=useSelector((store)=>store.config.lang);
  const searchText=useRef(null);
  const serviceMovieTMDB=async(movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie +"&include_adult=false&language=en-US&page=1",API_OPTIONS);
    const json=await data.json();
    return json.results;
  }
  const handleGptSearch=async () => {
    const gptQuery="Act as movie recommendations system and suggest some movies for the query : " + searchText.current.value + ". only give me name of 5 movies, comma separated like the example result give ahead.Example Tiger , Soldier, KGF, Race, Leo"
    const gptResults=await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery}],
          model: 'gpt-3.5-turbo',
    });
    
    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");  

    const promiseArray=gptMovies.map((movie)=>serviceMovieTMDB(movie));
    const tmdbResults=await Promise.all(promiseArray);
    
    dispatch(addGptMovieResults({movieName:gptMovies,movieResults:tmdbResults}));
  }
  return ( 
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
                <input ref={searchText} text="text" className="p-4 m-4 col-span-9" placeholder={lang[language].gptPlaceholder}/>
                <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearch}>{lang[language].search}</button>
            </form>
        </div>
  )
}

export default Gptbar; 