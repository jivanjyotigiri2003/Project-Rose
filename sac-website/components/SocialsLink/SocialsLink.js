import React from "react";

const SocialsLink = () => {
  const socials = [
    {
      name: "LinkedIn",
      icon: "https://res.cloudinary.com/dzbax077h/image/upload/v1677806233/Vector_biswa1.png",
      url: "",
    },
    {
      name: "Facebook",
      icon: "https://res.cloudinary.com/dzbax077h/image/upload/v1677806976/Vector_1_cjr4k3.png",
      url: "",
    },
    {
      name: "Twitter",
      icon: "https://res.cloudinary.com/dzbax077h/image/upload/v1677807014/Vector_2_ihxmsh.png",
      url: "",
    },
    {
      name: "Instagram",
      icon: "https://res.cloudinary.com/dzbax077h/image/upload/v1677807047/Vector_3_geb5pe.png",
      url: "",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {socials.map((socialItem) => {
        return (
          <div className="">
            <a href={socialItem.url}>
              <img src={socialItem.icon} className="h-[3vh] w-[3vh] " />
            </a>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default SocialsLink;
