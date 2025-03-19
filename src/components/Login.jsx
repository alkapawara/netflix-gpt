import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const toggleForm=()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div className="relative w-full h-screen ">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg"
          alt="Netflix background"
          className="w-full h-full object-cover"
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-100 md:opacity-60 "></div>
      </div>
      <form className="absolute p-8 bg-opacity-80 bg-black w-full max-w-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
        <h2 className="text-3xl  text-white mb-6 space-x-4 ">{isSignInForm?"Sign In":"Sign Up"}</h2>
        {!isSignInForm && (<input
          type="text"
          placeholder="Full name"
          className="py-2 px-4 mb-4 w-full bg-gray-800 bg-opacity-50 text-white placeholder-gray-300 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />) }
        <input
          type="text"
          placeholder="Email"
          className="py-2 px-4 mb-4 w-full bg-gray-800 bg-opacity-50 text-white placeholder-gray-300 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="password"
          placeholder="password"
          className="py-2 px-4 mb-4 w-full bg-gray-800 bg-opacity-50 text-white placeholder-gray-300 border border-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-white"
        />
        <button
         className="py-2 px-4 mb-4 w-full bg-red-700  text-white rounded text-lg "
        
         >{isSignInForm?"Sign In":"Sign Up"}
          
        </button>
        <p className="text-gray-300 font-kfom"  onClick={toggleForm}>
         {isSignInForm?(<>New to Netflix <span className="text-white">Sign up now.</span></> ) :( <>Already have an account? <span className="text-white">Sign In now.</span></>)}
        </p>
      </form>
    </div>
  );
};

export default Login;
