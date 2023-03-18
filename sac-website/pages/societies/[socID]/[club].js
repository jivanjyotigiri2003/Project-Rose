import React from "react";
import ClubHero2 from "@/components/ClubHero/ClubHero2";
import clubData from "../../../data/data";
import DeanSpeaks from "@/components/DeanSpeaks/DeanSpeaks";
import ContactCard from "@/components/ContactPage/ContactCard";
import { BsFillEnvelopeFill } from "react-icons/bs";

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
      <DeanSpeaks data={`About ${data.clubName}`} />
      {/* <SocietyRepresentative data="Club Representatives"/> */}

      <div
        className="w-[90%] md:w-[22vw] h-fit py-8  rounded-md"
        style={{
          backgroundColor: "white",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          margin: "1rem",
        }}
      >
        <div
          className="text-center font-semibold text-base lg:text-xl "
          style={{ color: "black" }}
        >
          Name
        </div>

        <div className="text-center  text-lg mb-3" style={{ color: "black" }}>
          designation
        </div>
        {/* <div className={stroke}></div> */}
        <div
          className="flex p-2 my-5 mx-auto w-[85%] rounded-lg h-fit  justify-center"
          style={{ backgroundColor: "red" }}
        >
          <BsFillEnvelopeFill
            className=" mr-3 lg:mt-1 -mt-0.5"
            style={{ color: "white" }}
          ></BsFillEnvelopeFill>
          <a
            href="mailto:sdbjwbdhij@gmail.com"
            className=" text-[0.5rem] sm:text-xs lg:text-sm xl:text-base"
            style={{ color: "white" }}
          >
            Email
          </a>
        </div>
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
