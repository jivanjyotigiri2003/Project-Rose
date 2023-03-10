import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import style from "./Gallery.module.css";
import data from "./galleryData";

function Gallery() {
  return (
    <div className="bg-red-600 py-2 ">
      <Marquee gradientWidth="100" speed="75">
        {/* <div className={style.image_wrapper}>
          <Image
            src="https://ik.imagekit.io/teaowgadw/one.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678229378475"
            height="600"
            width="400"
            alt=""
            className=" rounded-md"
          />
        </div> */}
        {data.map((data, idx) => {
          return (
            <div className={style.image_wrapper} key={idx}>
              <Image
                src={data.src}
                height={data.height}
                width={data.width}
                alt={data.alt}
                className="rounded-md"
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}

export default Gallery;
