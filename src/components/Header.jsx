import React, { useState } from "react";
import logo from "../assets/logo.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const handlSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error("Sign out error:", error);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmount
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute z-10 px-32 w-full bg-gradient-to-t from-transparent to-black flex justify-between items-center">
      <img src={logo} alt="Netflix Logo" className="w-44 " />
      {user && (
        <div className="flex gap-3 items-center">
          <img src={user?.photoURL} className="w-10 h-10" alt="profile" />
          <button onClick={handlSignOut} className="text-white font-bold font-kfom">sign out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
