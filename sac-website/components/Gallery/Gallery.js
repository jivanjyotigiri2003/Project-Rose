import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import style from "./Gallery.module.css";
import data from "./galleryData";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Gallery() {
  return (
    <div className=" bg-[url('https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940')] bg-cover">
      <div className="bg-[#A4161A]/70 h-[100%] py-10">
        <div className="text-4xl font-semibold text-center text-white pb-8">
          Gallery
        </div>
        <Fade direction="up" triggerOnce="true" delay="50">
          <Marquee gradientWidth="100" speed="100" pauseOnHover="true">
            {data.map((data, idx) => {
              return (
                <div className={style.image_wrapper} key={idx}>
                  <Link href="/gallery">
                    <LazyLoadImage
                      src={data.src}
                      height={data.height}
                      width={data.width}
                      alt={data.alt}
                      className="rounded-md h-[100%] bg-cover object-cover"
                    />
                    {/* <Image
                      src={data.src}
                      height={data.height}
                      width={data.width}
                      alt={data.alt}
                      className="rounded-md h-[100%] bg-cover object-cover"
                    /> */}
                  </Link>
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
