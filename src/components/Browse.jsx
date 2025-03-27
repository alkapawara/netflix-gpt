import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTION } from "../utils/constants";
const Browse = () => {
  // const getNowMoviePlay = async () => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/movie/now_playing?page=1",
  //     API_OPTION
  //   );
  //   const json = await data.json();
  //   console.log("json", json);
  // };
  // useEffect(() => {
  //   getNowMoviePlay();
  // }, []);
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
