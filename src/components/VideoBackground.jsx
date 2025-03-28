import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailervideo } from "../utils/movieSlice";
const VideoBackground = ({ moviId }) => {
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
  const dispatch = useDispatch();
  const videoTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/1125899/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    const filterData = json.results.filter((vdo) => vdo.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log("tralertvido", filterData);
    console.log("jsonTrailer", json);
    dispatch(addTrailervideo(trailer));
  };

  useEffect(() => {
    videoTrailer();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
