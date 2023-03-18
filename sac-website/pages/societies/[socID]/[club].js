import React from "react";
import ClubHero2 from "@/components/ClubHero/ClubHero2";
import clubData from "../../../data/data";
import DeanSpeaks from "@/components/DeanSpeaks/DeanSpeaks";
import ClubCard from "./ClubCard";

export default function club({ data }) {
  let backImg;
  if (data.clubSociety == "Film and Music Society") {
    backImg =
      "https://res.cloudinary.com/dlru9kd0x/image/upload/v1679168254/new%20societies/film1_atasq9.png";
  } else if (data.clubSociety == "Technical Society") {
    backImg =
      "https://res.cloudinary.com/dlru9kd0x/image/upload/v1679168250/new%20societies/technical1_lciid6.png";
  } else if (data.clubSociety == "Literary and Cultural Society") {
    backImg =
      "https://res.cloudinary.com/dlru9kd0x/image/upload/v1679168258/new%20societies/lcs_2_xwljvb.png";
  } else {
    backImg =
      "https://res.cloudinary.com/dlru9kd0x/image/upload/v1679168252/new%20societies/sport_f8whgf.png";
  }
  return (
    <>
      <ClubHero2
        name={data.clubName}
        tagline={data.clubTagline}
        logo={data.clubLogo}
        inst={data.clubInstagram}
        face={data.clubFacebook}
        twit={data.clubTwitter}
        link={data.clubLinkedin}
        backImg={backImg}
      />
      <DeanSpeaks
        data={`About ${data.clubName}`}
        image={data.clubGroupPhoto}
        description={data.clubDescription}
      />
      {/* <SocietyRepresentative data="Club Representatives"/> */}

      <div className="md:grid md:grid-cols-3">
        {data.clubEB.length &&
          data.clubEB.map((data, idx) => {
            return (
              <ClubCard
                key={idx}
                name={data[1]}
                designation={data[0]}
                phone={data[2]}
              />
            );
          })}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const allPaths = clubData.map((path) => {
    // console.log(path.clubSociety);

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
  const eventData = clubData.find((ev) => params.club == ev.clubName);

  return {
    props: { data: eventData },
  };
}
