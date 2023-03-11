import ClubHero from "@/components/ClubHero/ClubHero";

import AboutNITR from "@/components/AboutPage/AboutNITR";
import SocietyGallery from "../../components/SocietyGallery/SocietyGallery";

import React from 'react'
import Footer from "@/components/Footer/Footer";
import Announcement from "@/components/Announcement/Announcement";

export default function Club
() {
  return (
    <div>
        <ClubHero/>
        <AboutNITR/>
        <SocietyGallery/>
        {/* <Footer/> */}
    </div>
  )
}


