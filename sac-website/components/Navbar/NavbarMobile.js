import React, { useState } from "react";
import Link from "next/link";

const NavbarMobile = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const modal = () => {
    setShowModal(!showModal);
    setIsOpen(!isOpen);
    console.log(showModal);
  };
  return (
    <>
      <div
        style={{ height: "10vh" }}
        className="flex justify-between items-center px-1 py-1 z-9999  navdiv "
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
      </div>
    </>
  );
};

export default NavbarMobile;
