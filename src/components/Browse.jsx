import React, { useEffect } from "react";
import Header from "./Header";
import useNowplayngMoview from "../hooks/useNowPlaying";
const Browse = () => {
  const nowPlayApi = useNowplayngMoview();
  console.log(nowPlayApi);
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
