import React from "react";
import { MOVIE_IMG_CDN_URL } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-6">
      <img src={MOVIE_IMG_CDN_URL + posterPath} alt="" />
    </div>
  );
};

export default MovieCard;
