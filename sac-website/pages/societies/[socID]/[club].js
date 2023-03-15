import React from 'react'
import { ClubHero2 } from '@/components/ClubHero/ClubHero2';
import clubData from '../../../data/data';

export default function club({data}) {
  return (
    <>
        <ClubHero2 name={data.clubName} tagline={data.clubTagline} />
       
    </>
  )
}

export async function getStaticPaths() {
  
  

  const allPaths = clubData.map((path) => {
    return {
      params: {
        
        club: path.clubName.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  
  
  const eventData = clubData.find((ev) => params.club == ev.clubName);

  return {
    props: { data: eventData },
  };
}