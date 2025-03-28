import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import { addTrailervideo } from "../utils/movieSlice";
const useMovieTrailerVideo = (moviId) => {
  const dispatch = useDispatch();

  const videoTrailer = async () => {
    // fetch video trailer and update the store with traler video data
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${moviId}/videos?language=en-US`,
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
};

export default useMovieTrailerVideo;
