import React, { useContext } from "react";
import { assets } from "../assets/assets";
import {
  useClerk,
  useUser,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate=useNavigate()
  const{setShowRecruiterLogin}=useContext(AppContext)
  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img src={assets.logo} onClick={()=>navigate("/")} className="cursor-pointer" alt="logo" />
        {user ? (
          <div className="flex items-center gap-3">
            <Link to={'/applications'}>Apply Job</Link>
            <p>|</p>
            <p className="max-sm:hidden">Hi, {user.firstName+" "+user.lastName}</p>
            <UserButton/>
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button onClick={(e)=>setShowRecruiterLogin(true)} className="text-gray-600">Recruiter Login</button>
            <button
              onClick={(e) => openSignIn()}
              className="bg-blue-600 text-white rounded-full px-6 sm:px-9 py-2"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
