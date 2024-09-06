import React from 'react';
import Hero from './Hero';
import ServiceSection from './ServiceSection';
import TopSpecialized from './TopSpecialized';
import HomeVisit from './HoveVisit';

const HomePage = () => {
   return (
      <div className='min-h-screen'>
         <Hero />
         <ServiceSection />
         <HomeVisit />
         <TopSpecialized />
      </div>
   );
};

export default HomePage;
