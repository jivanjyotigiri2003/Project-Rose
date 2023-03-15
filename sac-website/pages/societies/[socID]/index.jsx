import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ClubName from "@/components/ClubName/ClubName";
import DeanSpeaks from "@/components/DeanSpeaks/DeanSpeaks";
import SocietyGallery from "@/components/SocietyGallery/SocietyGallery";
import SocietyRepresentative from "@/components/SocietyRepresentative/SocietyRepresentative";
import { socData } from "../index.jsx";

import clubData from "../../../data/data.js";

export default function soc() {
  const router = useRouter();
  const { socID } = router.query;
  console.log(socID);
  let socName = "Technical";
  if (socID == 2) socName = "Film & Music";
  else if (socID == 3) socName = "Literay & Culture";
  else if (socID == 4) socName = "Games & Sports";

  return (
    <>
      <div className="bg-[url('../public/heroimg.png')] bg-no-repeat bg-cover bg-center w-full min-h-screen overflow-x-hidden">
        <div className="  bg-gradient-to-b from-[#850101cc] to-[#8501011a] bg-no-repeat w-full bg-cover bg-center min-h-screen">
          <div className="bg-[#00000073] bg-no-repeat w-full bg-cover bg-center min-h-screen">
            <div className="flex justify-center items-center min-h-screen">
              <div className=" text-center tracking-wide text-6xl font-bold  text-white z-50 saturate-100 bg-cover top-0 left-0 ">
                {socName} Society
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
      <DeanSpeaks data="About Technincal Society" />
      <SocietyRepresentative />

      <ClubName socName={socID} />

      <SocietyGallery />
    </>
  );
}

export async function getStaticPaths() {
  const socName = socData;

  const allPaths = socName.map((soc) => {
    return {
      params: {
        socID: soc.name.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const clubName = clubData;
  console.log(clubName);
  const data = clubName.filter((club) => {
    return club.clubSociety == params.socID;
  });

  return {
    props: {
      data,
    },
  };
}
