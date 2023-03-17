import React from "react";
import ContactCard from "./ContactCard";

const SocietyContactCard = ({ societyTitle ,color1,color2,color3,stroke}) => {
  return (
     
      <div>
        <div className=" text-center text-4xl font-semibold pb-[8vh] md:pb-[10vh]" style={{color: color1}}>
          {societyTitle}
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 place-content-center space-x-4 gap-y-24 lg:gap-y-32">
            <ContactCard
              name="Prof. Poonam Singh"
              designation="President SAC"
              email="sdbjwbdhij@gmail.com"
              color1={color1}
              color2={color2}
              color3={color3}
              stroke={stroke}

            />
            <ContactCard
              name="Prof. Poonam Singh"
              designation="President SAC"
              email="sdbjwbdhij@gmail.com"
              color1={color1}
              color2={color2}
              color3={color3}
              stroke={stroke}
            />
            <ContactCard
              name="Prof. Poonam Singh"
              designation="President SAC"
              email="sdbjwbdhij@gmail.com"
              color1={color1}
              color2={color2}
              color3={color3}
              stroke={stroke}
            />
            <ContactCard
              name="Prof. Poonam Singh"
              designation="President SAC"
              email="sdbjwbdhij@gmail.com"
              color1={color1}
              color2={color2}
              color3={color3}
              stroke={stroke}
            />
            <ContactCard
              name="Prof. Poonam Singh"
              designation="President SAC"
              email="sdbjwbdhij@gmail.com"
              color1={color1}
              color2={color2}
              color3={color3}
              stroke={stroke}
            />
            <ContactCard
              name="Prof. Poonam Singh"
              designation="President SAC"
              email="sdbjwbdhij@gmail.com"
              color1={color1}
              color2={color2}
              color3={color3}
              stroke={stroke}
            />
            <ContactCard
              name="Prof. Poonam Singh"
              designation="President SAC"
              email="sdbjwbdhij@gmail.com"
              color1={color1}
              color2={color2}
              color3={color3}
              stroke={stroke}
            />
            <ContactCard
              name="Prof. Poonam Singh"
              designation="President SAC"
              email="sdbjwbdhij@gmail.com"
              color1={color1}
              color2={color2}
              color3={color3}
              stroke={stroke}
            />
          </div>
        </div>
        </div>

  );
};

export default SocietyContactCard;
