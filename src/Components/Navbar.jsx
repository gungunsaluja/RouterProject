import React from "react";
import logo from "../assets/Logo.svg";

import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-evenly-between items-center w-11/12 max-w-[1160px] py-4 mx-auto ">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy"></img>
      </Link>
      <nav>
        <ul className="text-white flex gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* login signup logout dashboard */}
      <div className="flex items-center gap-x-4 ">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-black text-white py-[8px] px-[12px] rounded-[8px] border border-black">
              Login
            </button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-black text-white py-[8px] px-[12px] rounded-[8px] border border-black">
              Sign Up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              className="bg-black text-white py-[8px] px-[12px] rounded-[8px] border border-black"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-black text-white py-[8px] px-[12px] rounded-[8px] border border-black">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
