import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailerVideo from "../hooks/useMovieTrailerVideo";

const VideoBackground = ({ moviId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailerVideo(moviId);
  return (
    <div className="w-screen">
      {trailerVideo ? (
       <iframe
       className="w-screen aspect-video"
       src={`https://www.youtube.com/embed/${trailerVideo?.key}?mute=1&autoplay=1&rel=0`}
       title="YouTube video player"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       allowFullScreen
     ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBackground;
