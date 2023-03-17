import React from "react";
import ClubHero2 from "@/components/ClubHero/ClubHero2";
import clubData from "../../../data/data";
import DeanSpeaks from "@/components/DeanSpeaks/DeanSpeaks";
import SocietyRepresentative from "@/components/SocietyRepresentative/SocietyRepresentative";
export default function club({ data }) {
  return (
    <>
      <ClubHero2 name={data.clubName} tagline={data.clubTagline} logo={data.clubLogo}/>
      <DeanSpeaks data={`About ${data.clubName}`}/>
      <SocietyRepresentative data="Club Representatives"/>

    </>
  );
}

export async function getStaticPaths() {
  const allPaths = clubData.map((path) => {
    console.log(path.clubSociety)
    return {
      params: {
        socID: path.clubSociety.toString(),
        club: path.clubName.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const eventData = clubData.find((ev) => params.club == ev.clubName);

  return {
    props: { data: eventData },
  };
}
