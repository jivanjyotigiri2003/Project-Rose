import React from 'react'
import Link from 'next/link'
import {useRouter}  from 'next/router';
import ClubName from '@/components/ClubName/ClubName';
import DeanSpeaks from '@/components/DeanSpeaks/DeanSpeaks';
import SocietyGallery from '@/components/SocietyGallery/SocietyGallery';
import SocietyRepresentative from '@/components/SocietyRepresentative/SocietyRepresentative';
import {socData} from '../index.jsx'

import clubData from '../../../data/data.js';


export default function soc() {
  const router = useRouter();
  const {socID} = router.query;
       console.log(socID);
let socName="Technical"
  if(socID==2)
  socName="Film & Music"
    else if(socID==3)   
    socName="Literay & Culture"
    else if(socID==4)
    socName="Games & Sports"
 

  
    return (
        <>
        <div>
           
          <div className="h-[100vh] w-[100vw] relative justify-center align-middle flex flex-col">
            
            
            <div className=" text-center tracking-wide text-6xl font-bold  text-white z-50 saturate-100 bg-cover top-0 left-0 ">
             {socName} Society
              <p className="  pt-10 text-xl font-semibold tracking-wide ">
                THE TECHNICAL SOCIETY OF STUDENT ACTIVITY CENTRE, NIT
                <br />
                ROURKELA IS PROUD TO PRESENT ITS WORKING AND
                <br />
                ENTOURAGE TO ALL THE TECHNOCRATS AND INNOVATORS OF
                <br />
                MODERN ERA.
              </p>
            </div>
            <div className="absolute z-10 saturate-100 bg-cover top-0 left-0 h-[100%] w-[100%] bg-[url('../public/heroimg.png')]"></div>
            <div className="absolute z-20 opacity-30 h-[100%] top-0 left-0 w-[100%] bg-[#0B0B0B]"></div>
            <div className="absolute z-40 opacity-30 h-[100%] top-0 left-0 w-[100%] bg-gradient-to-b from-[rgba(133,1,1,94)] to-[rgb(133,1,1)] "></div>
          </div>
        </div>
        <DeanSpeaks data="About Technincal Society"/>
        <SocietyRepresentative/>
        
        <ClubName socName={socID}/>
        
        <SocietyGallery/>
      </>
  )
}

export async function getStaticPaths(){
     const socName = socData;

     const allPaths=socName.map((soc)=>{
          return{
               params:{
                socID:soc.name.toString()
              }
          }
     }
      )

      return {
        paths: allPaths,
        fallback: false,
      };
}

export function getStaticProps({params}){
      const clubName= clubData;
       console.log(clubName); 
      const data=clubName.filter((club)=>{return club.clubSociety==params.socID});

      return{
            props:{
                data
            }
      }
  }
