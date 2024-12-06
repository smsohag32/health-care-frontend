import React from 'react';
import { Link } from 'react-router-dom';
import doctor from "@/assets/hero/doctor.png"
import { Stethoscope } from 'lucide-react';

const Hero = () => {
   return (
      <div className=' z-50 min-h-[600px] flex items-center overflow-hidden'>
         <div className="  main-container relative flex flex-col lg:flex-row items-start">
            <div className=" flex-1 w-full pt-16">
               <p className=" text-title">Your Health, Our Priority</p>
               <div className="mt-3 max-w-3xl">
                  <h1 className="scroll-m-20  text-title text-4xl font-medium tracking-tight lg:text-5xl">
                     Book a Doctor&apos;s Appointment <span className='text-skyblue'>Health Care</span>
                  </h1>
               </div>

               <div className="mt-5 max-w-3xl">
                  <p className="text-xl text-des font-normal leading-[30px]">
                     Say goodbye to endless phone calls and long queues. Book doctor&apos;s appointments, video consultations, ambulance service, manage medical records, and more. Take the first step towards better health.
                  </p>
               </div>
               <div className='mt-6'>
                  <Link className='cursor-pointer primary-btn max-w-[220px]' to={"/find-doctors"} >Appointment now</Link>
               </div>

            </div>
            <div className=''>
               <img className='lg:max-w-[600px]' src={doctor} alt="Doctor" />
            </div>

            <span className='text-des absolute move-animation top-20 right-1/3 lg:right-2/3 z-30'><Stethoscope className='rotate-180' /></span>
         </div>
      </div>
   );
};

export default Hero;
