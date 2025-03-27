import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
const MainConatiner = () => {
    const data=useSelector((store)=>store?.movies?.nowplayonhMovie);
    if(!data) return;
    const mainMovie=data[0]
const {original_title,overview} =mainMovie;

  return (
    <>
    <VideoBackground  />
    <VideoTitle title={original_title} overview={overview} />
    </>
  )
}

export default MainConatiner