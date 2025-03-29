import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="container flex justify-between  gap-4 px-4 py-3 mt-20 2xl:px-20 mx-auto items-center ">
      <img width={160} src={assets.logo} alt="" />
      <p className="flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">Copyrigth @NazmulSofts | All right reserved.</p>
      <div className="flex items-center justify-center gap-2.5">
        <a href="">
          <img width={38} src={assets.facebook_icon} alt="" />
        </a>
        <a href="">
          <img width={38} src={assets.twitter_icon} alt="" />
        </a>
        <a href="">
          <img width={38} src={assets.instagram_icon}alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
