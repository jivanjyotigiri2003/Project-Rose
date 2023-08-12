import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SocialsLink = () => {
  const socials = [
    {
      name: "LinkedIn",
      icon: "https://res.cloudinary.com/dzbax077h/image/upload/v1677806233/Vector_biswa1.png",
      url: "https://www.linkedin.com/company/webwiz-nitr/",
    },
    {
      name: "Facebook",
      icon: "https://res.cloudinary.com/dzbax077h/image/upload/v1677806976/Vector_1_cjr4k3.png",
      url: "https://www.facebook.com/webwiz.nitr",
    },
    {
      name: "Twitter",
      icon: "https://res.cloudinary.com/dzbax077h/image/upload/v1677807014/Vector_2_ihxmsh.png",
      url: "https://twitter.com/webwiznitr",
    },
    {
      name: "Instagram",
      icon: "https://res.cloudinary.com/dzbax077h/image/upload/v1677807047/Vector_3_geb5pe.png",
      url: "https://www.instagram.com/webwiz.nitr/?hl=en",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {socials.map((socialItem) => {
        return (
          <div className="">
            <a href={socialItem.url}>
              <LazyLoadImage
                src={socialItem.icon}
                className="h-[3vh] w-[3vh]"
              />
              {/* <img src={socialItem.icon} className="h-[3vh] w-[3vh]" /> */}
            </a>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default SocialsLink;
