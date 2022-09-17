import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="Navbar px-4 py-10">
        <div className="flex gap-1 justify-center text-2xl text-white">
          <Link
            to="/"
            className="inline-block hover:bg-blue-500 hover:cursor-pointer px-3 py-1 pb-2 rounded-xl"
          >
            Intro
          </Link>
          <Link
            to="/profile"
            className="inline-block hover:bg-blue-500 hover:cursor-pointer px-3 py-1 pb-2 rounded-xl"
          >
            Profile
          </Link>
          <Link
            to="/project"
            className="inline-block hover:bg-blue-500 hover:cursor-pointer px-3 py-1 pb-2 rounded-xl"
          >
            Projects
          </Link>
        </div>
      </div>
    </>
  );
}
export default Navbar;
