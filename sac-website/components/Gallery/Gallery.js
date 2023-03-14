import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import style from "./Gallery.module.css";
import data from "./galleryData";
import { Fade } from "react-awesome-reveal";

function Gallery() {
  return (
    <div className=" bg-[url('../public/img1.jpg')] bg-cover">
      <div className="bg-[#A4161A]/70 py-24">
        <Fade direction="up" triggerOnce="true" delay="50">
          <Marquee gradientWidth="100" speed="100" pauseOnHover="true">
            {data.map((data, idx) => {
              return (
                <div className={style.image_wrapper} key={idx}>
                  <Image
                    src={data.src}
                    height={data.height}
                    width={data.width}
                    alt={data.alt}
                    className="rounded-md h-[100%]"
                  />
                </div>
              );
            })}
          </Marquee>
        </Fade>
      </div>
    </div>
  );
}

export default Gallery;
