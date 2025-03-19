import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="absolute  z-10 px-32 ">
      <img src={logo} alt="Netflix Logo" className="w-44 " />
    </div>
  );
};

export default Header;
