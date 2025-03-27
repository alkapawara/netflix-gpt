import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
// import { API_OPTION } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import { addnowplayonhMovie } from "../utils/movieSlice";
const Browse = () => {
  // const dispatch = useDispatch();
  // const getNowMoviePlay = async () => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/movie/now_playing?page=1",
  //     API_OPTION
  //   );
  //   const json = await data.json();
  //   console.log("json", json.results);
  //   dispatch(addnowplayonhMovie(json.results));
  // };
  // useEffect(() => {
  //   getNowMoviePlay();
  // }, []);

  const pl = useNowPlaying();
  console.log("datsadds", pl);
  return (
    <>
      <Header />
      <div className="pt-40">
        <h2>hel</h2>
      </div>
    </>
  );
};

export default Browse;
