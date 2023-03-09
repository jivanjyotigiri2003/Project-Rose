import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from "next/image";

import style from './Gallery.module.css';

function Gallery() {
  return (
    <div className={style.Gallery}>
      

      <div>
        <Marquee className={style.caro} gradientWidth='100' speed={300}>
          <div className={style.image_wrapper}>
          <Image
                    src="https://ik.imagekit.io/teaowgadw/one.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678229378475"
                    height="600"
                    width="400"
                    alt=""
                />
          </div>
          <div className={style.image_wrapper}>
             <Image
                    src="https://ik.imagekit.io/teaowgadw/three.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678229378742"
                    height="600"
                    width="400"
                    alt=""
                  />
          </div>
          <div className={style.image_wrapper}>
             <Image
             
                    src="https://ik.imagekit.io/teaowgadw/two.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678229378101"
                    height="600"
                    width="400"
                    alt=""

                     />
          </div>
          <div className={style.image_wrapper}>
             <Image
             
                    src="https://ik.imagekit.io/teaowgadw/nine.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678229377737"
                    height="600"
                    width="400"
                    alt=""
                     />
          </div>
         
        
          <div className={style.image_wrapper}>
             <Image
             
                    src="https://ik.imagekit.io/teaowgadw/four.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678229377937"
                    height="600"
                    width="400"
                    alt=""
                     />
          </div>
          <div className={style.image_wrapper}>
             <Image
             
                    src="https://ik.imagekit.io/teaowgadw/ten.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678229376964"
                    height="600"
                    width="400"
                    alt=""
                     />
          </div>
          <div className={style.image_wrapper}>
             <Image
             
                    src="https://ik.imagekit.io/teaowgadw/seven.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678229378797"
                    height="600"
                    width="400"
                    alt=""
                     />
          </div>
          <div className={style.image_wrapper}>
             <Image
             
                    src="https://ik.imagekit.io/teaowgadw/two.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678229378101"
                    height="600"
                    width="400"
                    alt=""
                     />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Gallery;
