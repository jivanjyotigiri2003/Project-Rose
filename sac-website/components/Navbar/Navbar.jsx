import React from "react";
import { useRouter } from "next/router";
import Link  from 'next/link';


const Navbar = () => {
  const router = useRouter();

  return (
    <div>
      <div className=" w-screen h-[12vh] p-[1rem] px-[2rem] flex justify-between  bg-gradient-to-t from-transparent to-gray-900">
        <div className=" ">
          <img src="logo.svg" alt="" />
        </div>
        <div className=" flex justify-around space-x-12 p-5 text-white font-light">
         <Link  href="/">  Home </Link> 
          <Link href="/societies">Societies</Link>
          
          <Link href="/events">Events</Link>
         <Link href="/gallery">Gallery</Link>
         <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
