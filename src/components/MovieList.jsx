import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {
  return <div className="p-6">

    <h1 className="text-3xl py-6">{title}</h1>
    <div className="flex overflow-x-scroll">
    <div className="flex">
    {(movies && movies.length > 0) ? (
  movies.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path} />)
) : (
  <p className="text-gray-400">No Movies Found</p>
)}
   
    </div>

    </div>
   
  </div>
};

export default MovieList;
