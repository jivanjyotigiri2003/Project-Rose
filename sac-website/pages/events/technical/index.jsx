import DeanSpeaks from '@/components/DeanSpeaks/DeanSpeaks'
import SocietyGallery from '@/components/SocietyGallery/SocietyGallery'
import SocietyHero from '@/components/SocietyHero/SocietyHero'
import SocietyRepresentative from '@/components/SocietyRepresentative/SocietyRepresentative'
import React from 'react'

export default function IndividualSociety() {
  return (
    <div>
        <SocietyHero/>
        <DeanSpeaks/>
        <SocietyRepresentative/>
        <SocietyGallery/>

    </div>
  )
}
