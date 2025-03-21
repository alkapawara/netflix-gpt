import React, { useState } from "react";
import logo from "../assets/logo.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate=useNavigate()

  const user = useSelector((state) => state.user);
console.log(user)
  const handlSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
      console.error("Sign out error:", error);
    });
  }
  return (
    <div className="absolute z-10 px-32 w-full bg-gradient-to-t from-transparent to-black flex justify-between items-center">
      <img src={logo} alt="Netflix Logo" className="w-44 " />
   {user && (
      <div className="flex gap-3 items-center">
      <img src={user?.photoURL} className="w-10 h-10" alt="profile"/>
      <button onClick={handlSignOut} >sign out</button>
       </div> 
   )}
    </div>
  );
};

export default Header;
