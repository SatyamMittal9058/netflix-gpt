import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";
const GptSuggest = () => {
  const gpt=useSelector(store=> store.gpt);
  const {movieResults,movieName}=gpt;
  if(!movieName) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      <div>
        {movieName.map((moviename,index)=>(
          <MovieList
          key={moviename}
          title={moviename}
          movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default GptSuggest