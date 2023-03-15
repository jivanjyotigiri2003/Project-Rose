import React from "react";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import react, { useState } from "react";
import Link from "next/link";
import { justify } from "@cloudinary/url-gen/qualifiers/textAlignment";

const HomePageMobile = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const modal = () => {
    setShowModal(!showModal);
    setIsOpen(!isOpen);
    console.log(showModal);
  };
  return (
    <>
      <div className="h-screen mobile-hide ">
        {/* <div
          style={{ height: "10vh" }}
          className="flex justify-between items-center px-1 py-1 z-9999 bg-red-600 navdiv "
        >
          <div>
            <img
              src="https://media.9curry.com/uploads/organization/image/266/nit-rourkela.png"
              alt=""
              style={{ width: "50px" }}
            />
          </div>
          <div>
            <button onClick={modal}>
              <div className="hamburger-icon" onClick={modal}>
                <div className={`line ${isOpen ? "open" : ""}`}></div>
                <div className={`line ${isOpen ? "open" : ""}`}></div>
                <div className={`line ${isOpen ? "open" : ""}`}></div>
              </div>
            </button>
          </div>
        </div>

        <div className={`${showModal ? "visible" : "hide"} `}>
          <ul className="ul-list">
            <li>
              <button onClick={modal}>
                <Link href="/">Home</Link>
              </button>
            </li>
            <li>
              <button onClick={modal}>
                <Link href="/about">About</Link>
              </button>
            </li>
            <li>
              <button onClick={modal}>
                <Link href="/societies">Societies</Link>
              </button>
            </li>
            <li>
              <button onClick={modal}>
                <Link href="/Club">Clubs</Link>
              </button>
            </li>
            <li>
              <button onClick={modal}>
                <Link href="/gallery">Gallery</Link>
              </button>
            </li>
            <li>
              <button onClick={modal}>
                <Link href="/events">Events</Link>
              </button>
            </li>

            <li>
              <button onClick={modal}>
                <Link href="/contact">Contact</Link>
              </button>
            </li>
          </ul>
        </div> */}

        <Parallax pages={1.21}>
          <ParallaxLayer offset={0} speed={0}>
            <p className="bg-[url('https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940')] bg-cover bg-center w-full h-screen  ">
              <div
                style={{ height: "100vh" }}
                className="pb-10 flex flex-col justify-around items-center sticky top-0  bg-[#A4161A]/70 "
              >
                <div className="heading-div">
                  <div className="w-11/12 text-center text-white pl-6 mb-1 text-4xl">
                    Welcome to Student Activity Center
                  </div>
                  {/* <div className="text-white text-4xl text-center font-medium">
                    Creative Caliber <br /> at its best
                  </div> */}
                  <div className="text-white text-center w-4/5 m-auto text-sm mt-2">
                    Explore the plethora of thrilling events, exciting fests,
                    diverse clubs and other activities in the beautiful campus
                    of NIT Rourkela.
                  </div>
                </div>

                {/* <div className=" flex flex-col items-center justify-center pt-9">
                  <div className="h-12 w-32 bg-white text-black text-center rounded-lg leading-4 pt-2 font-medium ">
                    Want to <br /> know more?
                  </div>
                  <div className="h-12 w-32 bg-white text-black text-center rounded-lg leading-4 pt-2 font-medium mt-3">
                    Scroll down to explore more!
                  </div>
                  <div className="scroll-div3">
                    <BsFillArrowDownCircleFill className="text-red-700 text-5xl bg-white rounded-full mt-4" />
                  </div>
                </div> */}
              </div>
            </p>
          </ParallaxLayer>
          <ParallaxLayer offset={0.9999999} speed={1.94}>
            <div className="cate h-fill ">
              <div>
                <h3
                  style={{
                    position: "absolute",
                    top: "5vh",
                    left: "18%",
                    color: "white",
                    fontSize: "1.6rem",
                    textShadow: "1px 1px 5px red",
                  }}
                >
                  Film & Music Society
                </h3>
                <img
                  style={{
                    width: "100%",
                    height: "15.5vh",
                    objectFit: "cover",
                  }}
                  className="hover:w-9/12 cursor-pointer overflow-scroll"
                  src="https://ik.imagekit.io/tvfucug8t/fms_3.png?updatedAt=1678715231100"
                  alt=""
                />
              </div>

              <div>
                <h3
                  style={{
                    position: "absolute",
                    top: "20.7%",
                    left: "20%",
                    color: "white",
                    fontSize: "1.6rem",
                    textShadow: "1px 1px 5px red",
                  }}
                >
                  Technical Society
                </h3>
                <img
                  style={{
                    width: "100%",
                    height: "15.5vh",
                    objectFit: "cover",
                  }}
                  src="https://ik.imagekit.io/tvfucug8t/315944295_683489136672980_8046188745263207622_n_1.png?updatedAt=1678715474291"
                  alt=""
                />
              </div>
              <div>
                <h3
                  style={{
                    position: "absolute",
                    top: "35.7%",
                    left: "10%",
                    color: "white",
                    fontSize: "1.6rem",
                    textShadow: "1px 1px 5px red",
                  }}
                >
                  Literary & Culture Society
                </h3>
                <img
                  style={{
                    width: "100%",
                    height: "15.5vh",
                    objectFit: "cover",
                  }}
                  src="https://ik.imagekit.io/tvfucug8t/299931819_5474832855928681_3837718550837062886_n_2.png?updatedAt=1678715222688"
                  alt=""
                />
              </div>
              <div>
                <h3
                  style={{
                    position: "absolute",
                    top: "50.7%",
                    left: "23%",
                    color: "white",
                    fontSize: "1.6rem",
                    textShadow: "1px 1px 5px red",
                  }}
                >
                  Games & Sports
                </h3>
                <img
                  style={{
                    width: "100%",
                    height: "15.5vh",
                    objectFit: "cover",
                  }}
                  src="https://ik.imagekit.io/gourab18/sports.png?updatedAt=1678795149858"
                  alt=""
                />
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
};

export default HomePageMobile;
