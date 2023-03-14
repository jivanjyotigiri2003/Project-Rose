import React from "react";
import ContactCard from "./ContactCard";

const SocietyContactCard = ({ societyTitle }) => {
  return (
    <div>
      <div className="w-full h-[50vh] md:h-[60vh] bg-[#A4161A]  px-4 pt-8 pb-[5vh]">
        <div className="text-white text-center text-2xl font-semibold pb-[15vh] md:pb-[20vh]">
          {societyTitle}
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 place-content-center space-x-4 gap-y-36 lg:gap-y-60">
            <ContactCard
              name="Prof. Poonam Singh"
              designation="President SAC"
              email="sdbjwbdhij@gmail.com"
            />
            <ContactCard
              name="Prof. Poonam Singh"
              designation="President SAC"
              email="sdbjwbdhij@gmail.com"
            />
            <ContactCard
              name="Prof. Poonam Singh"
              designation="President SAC"
              email="sdbjwbdhij@gmail.com"
            />
            <ContactCard
              name="Prof. Poonam Singh"
              designation="President SAC"
              email="sdbjwbdhij@gmail.com"
            />
            <ContactCard
              name="Prof. Poonam Singh"
              designation="President SAC"
              email="sdbjwbdhij@gmail.com"
            />
            <ContactCard
              name="Prof. Poonam Singh"
              designation="President SAC"
              email="sdbjwbdhij@gmail.com"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[110vh] md:h-[80vh] lg:h-[100vh]"></div>
    </div>
  );
};

export default SocietyContactCard;
