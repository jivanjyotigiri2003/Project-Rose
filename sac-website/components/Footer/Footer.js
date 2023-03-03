import Link from "next/link";
import logonitr from "./logonitr.png";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsSuitHeartFill } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-[#660708]">
      <div className="  flex content-around justify-around pt-6">
        <div className=" flex flex-col justify-center content-between ">
          <Image src={logonitr} className="w-24"></Image>

          <h1 className="text-xl font-semibold text-white leading-8 pt-4">
            Sitemap
          </h1>
          <ul className="text-white text-lg leading-8 pt-8 pb-8">
            <li>Home</li>
            <li>About</li>
            <li>Societies</li>
            <li>Events</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
          <div className="flex space-x-4">
            <FaFacebook size={32} color={"white"} />

            <FaInstagram size={32} color={"white"} />
            <FaTwitter size={32} color={"white"} />
            <FaLinkedin size={32} color={"white"} />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-white leading-8">Events</h1>
          <ul className="text-white text-lg leading-8 pt-8 pb-8">
            <li>Loren</li>
            <li>Loren</li>
            <li>Loren</li>
            <li>Loren</li>
            <li>Loren</li>
          </ul>
          <h1 className="text-xl font-semibold text-white leading-8">Events</h1>
          <ul className="text-white text-lg leading-8 pt-8 pb-4">
            <li>Loren</li>
            <li>Loren</li>
            <li>Loren</li>
            <li>Loren</li>
            <li>Loren</li>
          </ul>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-xl font-semibold text-white leading-8 ">
            Contact Us
          </h1>
          <form className="flex flex-col justify-center">
            <p className="text-white text-lg leading-8 pt-8 ">Email:</p>
            <input
              type="email "
              className="p-1.5 text-white w-96 h-8 bg-[#A4161A] rounded-md"
            />
            <p className="text-white text-lg leading-8 pt-8 ">Message</p>
            <textarea className="p-1.5 text-white w-96 h-40 resize-none rounded-md bg-[#A4161A]" />
          </form>
        </div>
      </div>
        <div className="flex p-1">
          <div className="text-white w-2/5">
            <AiOutlineCopyrightCircle className="inline" /> Student Activity
            Center, copyright 2023{" "}
          </div>
          <div className="flex justify-start text-white font-semibold">
            Made with&nbsp; <BsSuitHeartFill size={24} color={"red"} /> &nbsp;
            by Webwiz
          </div>
        </div>
    </div>
  );
}
