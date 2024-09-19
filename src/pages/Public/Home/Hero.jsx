import SearchBox from '@/components/SearchBox/SearchBox';
import React from 'react';
import heroImage from "@/assets/hero/hero.webp"



// hero component for home page
const Hero = () => {
   return (
      <div
         className='relative bg-cover bg-center bg-no-repeat z-30'
         style={{ backgroundImage: `url(${heroImage})` }}
      >
         {/* Overlay */}
         <div className='absolute inset-0 bg-[#2c2c2c] bg-opacity-80 z-10 backdrop-blur-sm'></div>

         <div className="relative z-20 py-24 lg:py-10">

            <div className="relative z-30">
               <div className="main-container py-10 lg:py-16">
                  <div className="max-w-3xl text-center mx-auto">
                     <p className=" text-[#f8f8f8]">Your Health, Our Priority</p>
                     {/* Title */}
                     <div className="mt-3 max-w-3xl">
                        <h1 className="scroll-m-20 text-[#fcfcfc] leading-[30px] text-4xl font-extrabold tracking-tight lg:text-5xl">
                           Book a Doctor&apos;s Appointment with Health Care
                        </h1>
                     </div>

                     <div className="mt-5 max-w-3xl">
                        <p className="text-xl text-gray-200 leading-[30px]">
                           Say goodbye to endless phone calls and long queues. Book doctor&apos;s appointments, video consultations, ambulance service, manage medical records, and more. Take the first step towards better health.
                        </p>
                     </div>
                     {/* SearchBox */}
                  </div>
                  <div className="mt-8 w-full main-container gap-3 flex justify-center">
                     <SearchBox />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
