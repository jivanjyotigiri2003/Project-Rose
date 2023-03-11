import {Poppins} from 'next/font/google';


import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import "../styles/societyGallery.css";

import Footer from "@/components/Footer/Footer"


export default function App({ Component, pageProps }) {
  return (
    <div>
      <div className=" absolute top-0 z-40 w-full bg-transparent">
        <Navbar />
      </div>
      <Component {...pageProps} />
      <Footer />
      {/* <Callandar /> */}
    </div>
  );
}
