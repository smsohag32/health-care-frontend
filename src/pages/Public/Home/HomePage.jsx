import React from 'react';
import Hero from './Hero';
import ServiceSection from './ServiceSection';
import TopSpecialized from './TopSpecialized';
import HomeVisit from './HoveVisit';
import FaqSection from './FAQ';
import EmergencyContacts from './EmergencyContacts';
import Telemedicine from './Telemedicine';
import HealthTips from './HealthTip';

const HomePage = () => {
   return (
      <div className='min-h-screen'>
         <Hero />
         <ServiceSection />
         <HomeVisit />
         <HealthTips />
         <TopSpecialized />
         <FaqSection />
         <EmergencyContacts />
         <Telemedicine />
      </div>
   );
};

export default HomePage;
