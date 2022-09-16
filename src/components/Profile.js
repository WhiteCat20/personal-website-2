import React from "react";
import { Avatar } from "@mui/material";
import faizAvatar from "../img/faiz.JPG";
import Divider from "./Divider";

function Profile() {
  return (
    <>
      <div className="Profile text-white w-[80%]  md:w-[40%] mx-auto">
        <div className="flex gap-2 justify-center">
          <Avatar
            sx={{ width: 250, height: 250 }}
            alt="Faiz Rahmadani"
            src={faizAvatar}
          ></Avatar>
        </div>
        <p className="text-center text-2xl mt-5 italic">
          Hi! this is me, i'm 20 years old and passionate with new things!{" "}
        </p>
        <Divider />
        <div className="mt-5">
          <h1 className="text-center text-2xl">Skills and Interests</h1>
          <div className="flex justify-center gap-4 mt-4">
            <i class="fa-brands fa-react text-6xl"></i>
            <i class="fa-brands fa-laravel text-6xl"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
