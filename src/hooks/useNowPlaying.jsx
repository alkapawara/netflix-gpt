import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowplayonhMovie } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constants";
const useNowPlaying = () => {
  const dispatch = useDispatch();
  const getNowMoviePlay = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addnowplayonhMovie(json.results));
  };
  useEffect(() => {
    getNowMoviePlay();
  }, []);
};

export default useNowPlaying;
