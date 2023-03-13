import ClubHero2 from "@/components/ClubHero/ClubHero2";

import { Fade } from "react-awesome-reveal";
import AboutNITR from "@/components/AboutPage/AboutNITR";
import SocietyGallery from "../../components/SocietyGallery/SocietyGallery";

import React from 'react'
import Footer from "@/components/Footer/Footer";
import Announcement from "@/components/Announcement/Announcement";
import AboutPage from "@/components/AboutPage/AboutPage";
import Image from "next/image";
import DeanSpeaks from "@/components/DeanSpeaks/DeanSpeaks";
import dean from "../../public/dean.jpg";

export default function Club
() {
  return (
    <div>
        <ClubHero2/>
        <DeanSpeaks/>
        <SocietyGallery/>
        {/* <Footer/> */}
    </div>
  )
}


