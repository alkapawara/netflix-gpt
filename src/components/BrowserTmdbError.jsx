import React from 'react'

const BrowserTmdbError = () => {
  return (
    <div className='pt-10 text-xl flex justify-center bg-black h-screen flex-col items-center'>
    <div className='w-fit h-52'>
    <img src="https://d3k81ch9hvuctc.cloudfront.net/company/TRLZ9r/images/60375569-ae44-4dff-b87f-7da54f4f4c0d.gif" className='h-full w-full' alt="" />
    </div>
    <p className='text-white text-center'>Your browser does not support this feature. <br/>Please use the Tor browser or a VPN network.</p>
  </div>
  )
}

export default BrowserTmdbError