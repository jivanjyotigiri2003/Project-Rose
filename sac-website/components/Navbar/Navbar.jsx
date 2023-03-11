import React from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <div className=" w-screen h-[12vh] p-[1rem] px-[2rem] flex justify-between  bg-gradient-to-t from-transparent to-gray-900">
        <div className=" ">
          <img src="logo.svg" alt="" />
        </div>
        <div className=" flex justify-around space-x-12 p-5 text-white font-light">
          <div>
            <a href="#">Home</a>
          </div>
          <div>
            <a href="#">About</a>
          </div>
          <div>
            <a onClick={() => { router.push("/Society")}} href="#">Societies</a>
          </div>
          <div>
            <a href="#">Events</a>
          </div>
          <div>
            <a href="#">Gallery</a>
          </div>
          <div>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
