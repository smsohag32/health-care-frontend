import { Button } from '@/components/ui/button';
import React from 'react';

const Hero = () => {
   return (
      <div className='h-[680px] bg-opacity-80 backdrop-blur-sm  secondary-bg'>

         <div className="relative overflow-hidden py-24 lg:py-32">
            <div
               aria-hidden="true"
               className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
            >
               <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
               <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
            </div>



            <div className="relative z-10">
               <div className="main-container py-10 lg:py-16">
                  <div className="max-w-3xl text-center mx-auto">
                     <p className="">Your Health, Our Priority</p>
                     {/* Title */}
                     <div className="mt-3 max-w-3xl">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                           Book a Doctor's Appointment with Health Care
                        </h1>
                     </div>

                     <div className="mt-5 max-w-3xl">
                        <p className="text-xl text-muted-foreground">
                           Say goodbye to endless phone calls and long queues. Book doctor's appointments, video consultations, ambulance service, manage medical records, and more. Take the first step towards better health.
                        </p>
                     </div>
                     {/* SearchBox */}
                     <div className="mt-8 gap-3 flex justify-center">
                        <Button size={"lg"}>Search</Button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
