import MovieCard from "./MovieCard";

const MovieList=(props)=>{
    const {title,movies}=props;
    if(!movies) return;
    
    return (
        <div className="px-6">
            <h1 className="text-2xl pt-10 p-2 text-white">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies.map(movie=> <MovieCard key={movie?.id} posterPath={movie?.poster_path}/>)}
                </div>
            </div>
        </div>
    )
}
export default MovieList;