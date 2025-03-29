import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {

  const noMoviesArray = Array(7).fill(null); 
  return <div className="p-6 bg-black px-32">

    <h1 className="text-3xl py-6 text-white">{title}</h1>
    <div className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory touch-pan-x">
    <div className="flex space-x-4">
    {(movies && movies.length > 0) ? (
  movies.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path} />)
) : (
  <div className="flex">
    {noMoviesArray.map((_, index) => (
      <div key={index}>
        <p className="text-gray-900 w-48 pr-6 bg-slate-400 h-52 mr-6 text-center">
          No Movies Found
        </p>
      </div>
    ))}
  </div>
  
)}
  
    </div>

    </div>
   
  </div>
};

export default MovieList;
