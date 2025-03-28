import React from "react";

const VideoTitle = ({ title, overview }) => (
  <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute top-0 text-white bg-gradient-to-r from-black">
    <h2 className="text-2xl md:text-6xl font-bold">{title}</h2>
    <p className="hidden md:inline-block py-6 text-lg w-1/4 line-clamp-4">
      {overview}
    </p>
    <div className="my-4 md:m-0">
      <button className="bg-white text-black py-2 px-3 text-md  rounded-lg hover:bg-opacity-80">
        ▶ Play
      </button>
      <button className="hidden md:inline-block mx-3  bg-gray-500 text-white py-2 px-3 text-md bg-opacity-50 rounded-lg">
        More Info
      </button>
    </div>
  </div>
);

export default VideoTitle;
