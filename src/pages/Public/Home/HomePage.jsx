import React from 'react';
import Hero from './Hero';
import ServiceSection from './ServiceSection';
import TopSpecialized from './TopSpecialized';
import HomeVisit from './HoveVisit';
import FaqSection from './FAQ';

const HomePage = () => {
   return (
      <div className='min-h-screen'>
         <Hero />
         <ServiceSection />
         <HomeVisit />
         <TopSpecialized />
         <FaqSection />
      </div>
   );
};

export default HomePage;
