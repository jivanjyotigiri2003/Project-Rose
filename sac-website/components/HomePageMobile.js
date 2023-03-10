import React from "react";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import react, { useState } from "react";
import Link from "next/link";

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
      <div className="h-screen">
        <div
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
              {/* <RxHamburgerMenu className="text-2xl mb-2 mr-2 text-white" /> */}
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
                <Link href="/">Societies</Link>
              </button>
            </li>
            <li>
              <button onClick={modal}>
                <Link href="/">Gallery</Link>
              </button>
            </li>
            <li>
              <button onClick={modal}>
                <Link href="/">Events</Link>
              </button>
            </li>
            <li>
              <button onClick={modal}>
                <Link href="/">About</Link>
              </button>
            </li>
            <li>
              <button onClick={modal}>
                <Link href="/">Contact</Link>
              </button>
            </li>
          </ul>
        </div>

        <Parallax pages={1.21}>
          <ParallaxLayer offset={0} speed={0}>
            <p className="bg-[url('../public/hello.jpg')] bg-cover bg-center w-full h-screen">
              <div
                style={{ height: "90vh" }}
                className="pt-60 flex flex-col justify-around items-center sticky top-0 "
              >
                <div className="heading-div">
                  <div className="w-11/12 text-center text-white text-base pl-6 mb-1">
                    welcome to Student Activity Center
                  </div>
                  <div className="text-white text-4xl text-center font-medium">
                    Creative Caliber <br /> at its best
                  </div>
                  <div className="text-white text-center w-4/5 m-auto text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempora, incidunt enim ipsam ipsa quaerat libero itaque qui
                    quis voluptatibus id?
                  </div>
                </div>

                <div className=" flex flex-col items-center justify-center">
                  <div className="h-12 w-32 bg-white text-black text-center rounded-lg leading-4 pt-2 font-medium ">
                    Want to <br /> know more?
                  </div>
                  <div className="h-12 w-32 bg-white text-black text-center rounded-lg leading-4 pt-2 font-medium mt-3">
                    Scroll down to explore more!
                  </div>
                  <div className="scroll-div3">
                    <BsFillArrowDownCircleFill className="text-red-700 text-5xl bg-white rounded-full mt-4" />
                  </div>
                </div>
              </div>
            </p>
          </ParallaxLayer>
          <ParallaxLayer offset={0.9999999} speed={1.8}>
            <div className="cate">
              <img
                style={{ width: "100%", height: "15.5vh", objectFit: "cover" }}
                className="hover:w-9/12 cursor-pointer overflow-scroll"
                src="https://images.unsplash.com/photo-1673809032840-fce74a809f1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <img
                style={{ width: "100%", height: "15.5vh", objectFit: "cover" }}
                src="https://images.unsplash.com/photo-1673981171900-020cb6983841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <img
                style={{ width: "100%", height: "15.5vh", objectFit: "cover" }}
                src="https://images.unsplash.com/photo-1674025020772-d8a5a1c4bb00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <img
                style={{ width: "100%", height: "15.5vh", objectFit: "cover" }}
                src="https://images.unsplash.com/photo-1674017739150-8d8a528dc7c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
};

export default HomePageMobile;
