import React from 'react';
import Hero from './Hero';
import ServiceSection from './ServiceSection';
import TopSpecialized from './TopSpecialized';

const HomePage = () => {
   return (
      <div className='min-h-screen'>
         <Hero />
         <ServiceSection />
         <TopSpecialized />
      </div>
   );
};

export default HomePage;
