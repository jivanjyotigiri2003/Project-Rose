import React from 'react'
import SocietyHero from '../../components/SocietyHero/SocietyHero';
import SocietyGallery  from '@/components/SocietyGallery/SocietyGallery';

export default function Gallery() {
  return (
    
    <div className="relative">
      {/* Sac management page */}
      <div className="bg-[url('https://res.cloudinary.com/dkqxnquga/image/upload/v1678430362/image_767_hnhpi2.png')] bg-no-repeat w-full bg-cover bg-center h-full">
        <div className="  bg-gradient-to-b from-[#850101cc] to-[#8501011a] bg-no-repeat w-full bg-cover bg-center h-full">
          <div className="bg-[#00000073] bg-no-repeat w-full bg-cover bg-center h-full">
            <div className="flex justify-center items-center h-screen">
              <h1
                className={
                 " text-white font-bold text-5xl text-center"
                }
              >
               Gallery
              </h1>
            </div>
          </div>
        </div>
      </div>
        <SocietyGallery/>
    </div>
  )
}
