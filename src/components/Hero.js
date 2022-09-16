import React from "react";
import Divider from "./Divider";


function Hero() {
  const linkedIn = "https://www.linkedin.com/in/fzrahmadan/";
  const insta = "https://www.instagram.com/fzrahmadan/";
  const gitHub = "https://github.com/WhiteCat20";
  return (
    <>
      <div className="Hero text-white w-[80%]  md:w-[40%] mx-auto mt-3">
        <h1 className="text-5xl text-center xl:text-6xl">
          <span className="hidden md:inline-block">Hi! I'm</span> Faiz Rahmadani
        </h1>
        <p className="mt-5 text-md text-center">
          <span> Front End Web Developer </span> / <span> College Student </span> /
          <span> Software Development Enthusiast </span>
        </p>
        {/* Description */}
        <div className="mt-4">
          <p className="description md:text-xl">
            Currently in 3rd year of college in Engineering Physics Department
            of ITS Surabaya. A web developer who focuses on developing user
            interface with and still on process learning the back-end of the
            website. Well motivated to learn and never feel bored in learning
            new things. Also organized in time management with few experience of
            organizations in campus.
          </p>
        </div>
        <Divider />
        <p className="text-start md:text-center text-2xl my-5">Find me on: </p>
        <div className="flex justify-center mt-4 gap-5">
          <a href={linkedIn} target="_blank">
            <i class="fa-brands fa-linkedin text-5xl"></i>
          </a>
          <a href={gitHub} target="_blank">
            <i class="fa-brands fa-github text-5xl"></i>
          </a>
          <a href={insta} target="_blank">
            <i class="fa-brands fa-instagram text-5xl"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
