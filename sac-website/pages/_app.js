import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import NavbarMobile from "@/components/Navbar/NavbarMobile";
import "@/styles/globals.css";
import "../styles/societyGallery.css";
import "../styles/announcement.css";
import Footer from "@/components/Footer/Footer";


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
      <div className="mobile-hide">
        <NavbarMobile />
      </div>
      <Component {...pageProps} />
      <Footer />
      {/* <Callandar /> */}
    </main>
  );
}
