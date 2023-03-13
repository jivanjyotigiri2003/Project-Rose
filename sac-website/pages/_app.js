import { Poppins } from "next/font/google";

import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import "../styles/societyGallery.css";

import Footer from "@/components/Footer/Footer";

import { Roboto } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>

      <div className=" absolute top-0 z-40 w-screen bg-transparent web-hide">

        <Navbar />
        
      </div> 

   
      <Component {...pageProps} />
      <Footer />
      {/* <Callandar /> */}
    </main>
  );
}
