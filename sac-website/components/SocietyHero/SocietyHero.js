import React from "react";
// import { image } from "";

const SocietyHero = () => {
  return (
    <>
      <div className="bg-[url('../public/heroimg.png')] bg-no-repeat bg-cover bg-center w-full min-h-screen overflow-x-hidden">
        <div className="  bg-gradient-to-b from-[#850101cc] to-[#8501011a] bg-no-repeat w-full bg-cover bg-center min-h-screen">
          <div className="bg-[#00000073] bg-no-repeat w-full bg-cover bg-center min-h-screen">
            <div className="flex justify-center items-center min-h-screen">
              <div className=" text-center tracking-wide text-6xl font-bold  text-white z-50 saturate-100 bg-cover top-0 left-0 ">
                Technical Society
                <p className="  pt-10 text-xl font-semibold tracking-wide ">
                  THE TECHNICAL SOCIETY OF STUDENT ACTIVITY CENTRE, NIT
                  <br />
                  ROURKELA IS PROUD TO PRESENT ITS WORKING AND
                  <br />
                  ENTOURAGE TO ALL THE TECHNOCRATS AND INNOVATORS OF
                  <br />
                  MODERN ERA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocietyHero;
