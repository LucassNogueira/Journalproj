import React, { useState } from "react";
import NavItem from "./NavItem";
import Home from "./svg/Home";
import Login from "./svg/Login";
import Posts from "./svg/Posts";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <button
          className="fixed  z-30 flex items-center cursor-pointer right-5 top-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-5xl text-black fixed top-4 right-8 z-10"
        >
          x
        </button>
      )}
      <div
        className={`top-0 right-0 fixed  w-[15vw] h-full p-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <Link to="/" onClick={() => setIsOpen(!isOpen)}>
          <NavItem title="Home" svgIcon={<Home />} />
        </Link>
        <Link to="/login" onClick={() => setIsOpen(!isOpen)}>
          <NavItem title="Log In" svgIcon={<Login />} />
        </Link>
        <Link to="/feed" onClick={() => setIsOpen(!isOpen)}>
          <NavItem link={"feed"} title="Feed" svgIcon={<Posts />} />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
