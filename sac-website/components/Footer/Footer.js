import Link from "next/link";
import logonitr from "./logonitr.png";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsSuitHeartFill } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

export default function Footer() {
  return (
    <Fade direction="up" triggerOnce="true" delay="50">
      <div className="bg-[#660708]">
        <div className="  flex flex-wrap md:flex-row content-around justify-around pt-6">
          <div className=" flex flex-col justify-center content-between ">
            <Image src={logonitr} className="w-24"></Image>

            <h1 className="text-xl font-semibold text-white pt-4">Sitemap</h1>
            <ul className="text-white text-lg pt-8 pb-8">
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
            <div className="pb-8 pt-4">
              <h1 className="text-xl font-semibold text-white pb-8">Events</h1>
              <ul className="text-white text-lg">
                <li>Loren</li>
                <li>Loren</li>
                <li>Loren</li>
                <li>Loren</li>
                <li>Loren</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white pb-8">Events</h1>
              <ul className="text-white text-lg">
                <li>Loren</li>
                <li>Loren</li>
                <li>Loren</li>
                <li>Loren</li>
                <li>Loren</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-xl font-semibold text-white leading-8 ">
              Contact Us
            </h1>
            <form className="flex flex-col">
              <p className="text-white text-lg pt-8 ">Email:</p>
              <input
                type="email "
                className=" text-white w-[90vw] md:w-96 h-8 bg-[#A4161A] rounded-md border-none"
              />
              <p className="text-white text-lg leading-8 pt-8 ">Message</p>
              <textarea className=" text-white w-full md:w-96 h-40 resize-none rounded-md bg-[#A4161A] border-none" />
            </form>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center md:flex-row   p-1">
          <div className="text-white pt-8 md:pt-0 pb-4 md:pb-0 md:w-2/5">
            <AiOutlineCopyrightCircle className="inline" /> Student Activity
            Center, copyright 2023{" "}
          </div>
          <div className="flex justify-start pt-4 md:pt-0 text-white font-semibold">
            Made with&nbsp; <BsSuitHeartFill size={24} color={"red"} /> &nbsp;
            by Webwiz
          </div>
        </div>
      </div>
    </Fade>
  );
}
