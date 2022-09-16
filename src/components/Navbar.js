import React from "react";

function Navbar() {
  return (
    <>
      <div className="Navbar px-4 py-10">
        <div className="flex gap-1 justify-center text-2xl text-white">
          <a
            href="/"
            className="inline-block hover:bg-blue-500 hover:cursor-pointer px-3 py-1 pb-2 rounded-xl"
          >
            Intro
          </a>
          <a
            href="/profile"
            className="inline-block hover:bg-blue-500 hover:cursor-pointer px-3 py-1 pb-2 rounded-xl"
          >
            Profile
          </a>
          <a
            href="#"
            className="inline-block hover:bg-blue-500 hover:cursor-pointer px-3 py-1 pb-2 rounded-xl"
          >
            Projects
          </a>
        </div>
      </div>
    </>
  );
}
export default Navbar;
