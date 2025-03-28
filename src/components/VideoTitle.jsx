import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div>
      <h2 className="text-6xl font-bold">{title}</h2>
      <p className="w-1/4 py-6 text-lg">{overview}</p>
      <button className="bg-white rounded text-xl text-black px-2 py-1">Play</button>
      <button className="rounded bg-slate-500 mx-2 text-xl text-black px-2 py-1">
       More Info
      </button>
    </div>
  );
};

export default VideoTitle;
