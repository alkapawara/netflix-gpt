import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidFdata } from "../utils/valdate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Logn_Bg_img } from "../utils/constants";
import { User_Avtar } from "../utils/constants";
const Login = () => {
  const dispatch=useDispatch()
  const [isSignInForm, setIsSignInForm] = useState(true);
  const[erroMsg,setErrorMsg]=useState(null);
  const navigate=useNavigate()
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const fullname=useRef();
  const email=useRef(null);
  const pass=useRef();
 
  const handleForm = () => {
    let validationMsg = CheckValidFdata(
        email.current.value, 
        pass.current.value, 
        !isSignInForm ? fullname.current.value : undefined // Only pass fullname in Sign-up mode
    );
    setErrorMsg(validationMsg !== true ? validationMsg : null);
   
    if(validationMsg) {
      if(!isSignInForm){
        createUserWithEmailAndPassword(
          auth,  
          email.current.value,
          pass.current.value)
        .then((userCredential) => {
          // Signed up 
           const user = userCredential.user;
           updateProfile(user, {
            displayName: fullname?.current.value,
            photoURL: User_Avtar

          }).then(() => {
            // Profile updated! and this info getting from auth
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
             
          }).catch((error) => {
           setErrorMsg(error.message)
          });
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage)
          // ..
        });
      }
      else{
              signInWithEmailAndPassword(
                auth, 
                email.current.value,
          pass.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage)
        });
      }
      }
     
      
    
};
  return (
    <div className="relative w-full h-screen ">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 ">
        <img
          src={Logn_Bg_img}
          alt="Netflix background"
          className="w-full h-full object-cover"
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-100 md:opacity-60 "></div>
      </div>
      <form
        className="absolute p-8 bg-opacity-80 bg-black w-full max-w-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-3xl  text-white mb-6 space-x-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full name"
            ref={fullname}
            className="py-2 px-4 mb-4 w-full bg-gray-800 bg-opacity-50 text-white placeholder-gray-300 border border-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-white"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          ref={email}
          className="py-2 px-4 mb-4 w-full bg-gray-800 bg-opacity-50 text-white placeholder-gray-300 border border-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-white"
        />
        <input
          type="password"
          placeholder="password"
          ref={pass}
          className="py-2 px-4 mb-4 w-full bg-gray-800 bg-opacity-50 text-white placeholder-gray-300 border border-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-white"
        />
        <p className="text-white text-red-600">{erroMsg}</p>
        <button
          className="py-2 px-4 mb-4 w-full bg-red-700  text-white rounded text-lg"
          onClick={handleForm}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-gray-300 font-kfom cursor-pointer"
          onClick={toggleForm}
        >
          {isSignInForm ? (
            <>
              New to Netflix <span className="text-white">Sign up now.</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span className="text-white">Sign In now.</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
