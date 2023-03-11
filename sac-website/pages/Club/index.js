import ClubHero from "@/components/ClubHero/ClubHero";
import announcement from "../announcement";
import AboutNITR from "@/components/AboutPage/AboutNITR";
import SocietyGallery from "../../components/SocietyGallery/SocietyGallery";

import React from 'react'
import Footer from "@/components/Footer/Footer";

export default function Club
() {
  return (
    <div>
        <ClubHero/>
        <AboutNITR/>
        <announcement/>
        <SocietyGallery/>
        <Footer/>
    </div>
  )
}


