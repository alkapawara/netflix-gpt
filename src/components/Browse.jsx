import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainConatiner from "./MainConatiner";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlaying();

  return (
    <>
      <Header />
      <div className="pt-40">
        <MainConatiner />
        <SecondaryContainer />
      </div>
    </>
  );
};

export default Browse;
