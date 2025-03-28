import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailervideo } from "../utils/movieSlice";

const VideoBackground = ({ moviId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const dispatch = useDispatch();

  const videoTrailer = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${moviId}/videos?language=en-US`,
        API_OPTION
      );
      const json = await response.json();

      // ✅ Check if results exist
      if (!json.results || json.results.length === 0) {
        console.error("Error: No videos found", json);
        return;
      }

      // ✅ Filter Trailer Video
      const filterData = json.results.filter((vdo) => vdo.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];

      console.log("Trailer Video:", trailer);
      dispatch(addTrailervideo(trailer));
    } catch (error) {
      console.error("Error fetching trailer video:", error);
    }
  };

  useEffect(() => {
    videoTrailer();
  }, []);

  return (
    <div>
      {trailerVideo ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBackground;
