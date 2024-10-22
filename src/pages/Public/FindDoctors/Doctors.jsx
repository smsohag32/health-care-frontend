import DoctorCard from '@/components/cards/DoctorCard';
import React from 'react';

const Doctors = () => {
   return (
      <div className='grid gap-6 pb-10'>

         <DoctorCard />
         <DoctorCard />
      </div>
   );
};

export default Doctors;
