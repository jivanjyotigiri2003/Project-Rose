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
      <div className="bg-[#660708] ">
        <div className="  flex flex-wrap md:flex-row content-around justify-around pt-0">
          <div className=" flex flex-col justify-center  ">

            <h1 className="text-lg font-semibold text-white pt-2 pl-2">
              Sitemap
            </h1>
            <ul className="text-white text-md py-2 pl-2 cursor-pointer">
              <li>
                <Link href="/" className="hover:font-bold"> Home </Link>{" "}
              </li>
              <li>
                <Link href="/about" className="hover:font-bold"> About </Link>{" "}
              </li>
              <li>
                <Link href="/societies" className="hover:font-bold"> Societies </Link>{" "}
              </li>
              <li>
                <Link href="/events" className="hover:font-bold"> Events </Link>{" "}
              </li>
              <li>
                <Link href="/gallery" className="hover:font-bold"> Gallery </Link>{" "}
              </li>
              <li>
                <Link href="/contact" className="hover:font-bold"> Contact </Link>{" "}
              </li>
            </ul>
          </div>
          <div>
            <div className="mt-2  lg:mt-16">
              <h1 className="text-lg font-bold text-white pb-2 pl-2">Events</h1>
              <ul className="text-white text-md cursor-pointer tracking-wide ">
                <li>
                  {" "}
                  <a
                    href="https://inno.nitrkl.in/"
                    target="_blank"
                    className="hover:font-semibold"
                  >
                    INNOVISION
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="https://nitrutsav.live/"
                    target="_blank"
                    className="hover:font-semibold"
                  >
                    NITRUTSAV
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.multiethnicfest.com/"
                    className="hover:font-semibold"
                    target="_blank"
                  >
                    COSMOPOLITIAN
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div>
              {/* <h1 className="text-md font-bold text-white pb-2 pl-2">Events</h1> */}
              <ul className="text-white text-md cursor-pointer tracking-wide">
                <li>
                  {" "}
                  <a
                    href="https://vriddhi2022.live/"
                    className="hover:font-semibold"
                    target="_blank"
                  >
                    VRIDDHI
                  </a>{" "}
                </li>
               
                <li>
                  {" "}
                  <a
                    href="https://hackodisha2022.tech/"
                    className="hover:font-semibold"
                    target="_blank"
                  >
                    HackOdisha
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.hacknitr.com/"
                    className="hover:font-semibold"
                    target="_blank"
                  >
                    HackNitr
                  </a>{" "}
                </li>
                
              </ul>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex justify-center">
            <Image src={logonitr} className="w-24 py-4 "></Image>
            </div>
        

            <h1 className="text-xl font-normal text-white leading-8 mx-auto   my-1">
              National Institute of Technology
            </h1>
            <h1 className="text-xl font-normal text-white leading-8 mx-auto my-1">
              Rourkela, Odisha, India, 769008
            </h1>
            <h1 className="text-xl font-normal text-white leading-8 mx-auto my-1 cursor-pointer">
              <a href="tel:0661-246-2020 / 2002">0661-246-2020 / 2002</a>
            </h1>
            <h1 className="text-xl font-normal text-white leading-8 mx-auto my-1 cursor-pointer">
              {" "}
              <a href="mailto:registrar@nitrkl.ac.in">
                {" "}
                registrar@nitrkl.ac.in
              </a>
            </h1>
            <h1 className="text-xl font-normal text-white leading-8 mx-auto my-1 cursor-pointer">
              {" "}
              {/* <Link href="www.nitrkl.ac.in"> */}
              <a
                href="https://www.nitrkl.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                www.nitrkl.ac.in
              </a>
              {/* </Link> */}
            </h1>
            <div className="flex space-x-4 py-4 mx-auto  cursor-pointer ">
              <a href="https://www.facebook.com/sac.nitr/" target="_blank">
                <FaFacebook size={32} color={"white"} />
              </a>

              <a
                href="https://www.instagram.com/nitrourkela1961/"
                target="_blank"
              >
                <FaInstagram size={32} color={"white"} />
              </a>
              <a href="https://twitter.com/nitrourkela?lang=en" target="_blank">
                <FaTwitter size={32} color={"white"} />
              </a>
              <a
                href="https://www.linkedin.com/school/national-institute-of-technology-rourkela/"
                target="_blank"
              >
                <FaLinkedin size={32} color={"white"} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center md:flex-row   p-1">
          <div className="text-white pt-4 md:pt-0 pb-2 md:pb-0 md:w-2/5">
            <AiOutlineCopyrightCircle className="inline" /> Student Activity
            Center, copyright 2023{" "}
          </div>
          <div className="flex justify-start pt-2 md:pt-0 text-white font-semibold">
            Made with&nbsp; <BsSuitHeartFill size={24} color={"red"} /> &nbsp;
            by Webwiz
          </div>
        </div>
      </div>
    </Fade>
  );
}
