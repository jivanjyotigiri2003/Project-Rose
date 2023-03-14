import { useRouter } from "next/router";
import React from "react";
import Societypage from "./Societypage";
// import Logo from "../components/Logo";


function Event() {
  
  const router = useRouter();

  const image = {
    music: "https://i.ibb.co/zxMHMyh/music.png",
    // dance:"https://i.ibb.co/hVJyYnn/dance-Gray.png",
    drama: "https://i.ibb.co/PMsgZXH/drama.png",
    dance: "https://i.ibb.co/jz1z2v6/dance.png",
    logo: "https://i.ibb.co/YRmWqPB/cosmo-logo-1.png"
  };
  const transition = {
    transition: "all 1s ease-in-out",
  }
  
  return (
    <>
      <div className="Event relative w-screen h-screen overflow-hidden flex justify-center">
        <div onClick={() => router.push("/")} className="cursor-pointer  opacity-0 animate-[logo_4s_1_1s_linear_forwards] lg:w-[280px] h-[57px] sm:w-[160px] absolute left-[5%] sm:top-[40px] top-[48px] z-[20]">
          {/* <div className="logo-wrapper lg:bg-white p-[0.3rem] flex items-center lg:text-[1.53em] text-[0.8em] font-bold tracking-widest sm:h-[80px] h-[50px] gap-1">
            <div className="bg-[#153c37] h-full">
            </div>
          </div> */}
        </div>
        <div className="main absolute w-screen flex justify-center items-center h-screen flex-1">

          <div onClick={() => router.push({
            pathname: "/Societypage",
            query: { event: "dance" },
          })} className="peer absolute group cursor-pointer" style={transition}>
            <Societypage color='#153c37' img={image.dance} content="Technical" i={1} />
          </div>
          <div onClick={() => router.push({
            pathname: "/Societypage",
            query: { event: "music" },
          })} className="left-[25%] cursor-pointer hover:left-[24%] peer-hover:left-[27%] peer absolute" style={transition}>
            <Societypage color='#A34744' img={image.music} content="Film & Music" i={4} />
          </div>
          <div onClick={() => router.push({
            pathname: "/Societypage",
            query: { event: "drama" },
          })} className="left-[50%] cursor-pointer absolute hover:left-[48%] peer-hover:left-[51%]" style={transition}>
            <Societypage color="#EDAD38" img={image.drama} content="Literary & Culture" i={7} />
          </div>
          <div onClick={() => router.push({
            pathname: "/Societypage",
            query: { event: "random" },
          })} className="left-[75%] cursor-pointer absolute hover:left-[73%] peer-hover:left-[77%]" style={transition}>
            <Societypage color="Black" img={''} content="Games & Sports" i={7} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;