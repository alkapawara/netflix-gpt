import React from "react";

const VideoTitle = ({ title, overview }) => (
  <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
    <h2 className="text-6xl font-bold">{title}</h2>
    <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
    <div className="my-4 md:m-0">
    <button className="bg-white rounded text-xl text-black px-2 py-1">▶ Play</button>
    <button className="rounded bg-slate-500 mx-2 text-xl text-white px-2 py-1">
     More Info
    </button>
    </div>
    
  </div>
);

export default VideoTitle;
