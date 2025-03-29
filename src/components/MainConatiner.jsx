import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
import BrowserTmdbError from './BrowserTmdbError'
const MainConatiner = () => {
    const data=useSelector((store)=>store?.movies?.nowplayonhMovie);
    if (!data) {
        console.log("Data is NULL, early returning ");
        return <BrowserTmdbError />
      }
    const mainMovie=data[0]
    const {original_title,overview,id} = mainMovie;

  return (
    <>
    <VideoBackground moviId={id} />
    <VideoTitle title={original_title} overview={overview} />
    </>
  )
}

export default MainConatiner